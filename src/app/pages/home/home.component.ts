import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AlunoService } from '../../services/aluno.service';
import { MatButtonModule } from '@angular/material/button';
import { AlunoComponent } from '../aluno/aluno.component';
import { AppButtonComponent } from '../../components/app-button/app-button.component';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { MedidaCasePipe } from '../../pipes/MedidaCase.pipe';
import { PokemonRandomComponent } from '../pokemon-random/pokemon-random.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginService } from '../../services/login.service'; // Importar o LoginService

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    MatButtonModule, 
    AlunoComponent, 
    AppButtonComponent, 
    MatIcon, 
    MedidaCasePipe,
    RouterLink,
    PokemonRandomComponent,
    MatIcon,
    MatToolbarModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], // Corrigido de styleUrl para styleUrls
})
export class HomeComponent {
  alunos?: Observable<any>;

  constructor(
    private alunoService: AlunoService, 
    private route: Router,
    private loginService: LoginService // Injete o LoginService
  ) {
    this.alunos = this.alunoService.listarAlunos();
  }

  apagarAluno(chave: string) {
    this.alunoService.excluirAluno(chave).then(() => {
      console.log('Aluno excluído com sucesso.');
    }).catch((error) => {
      console.error('Erro ao excluir aluno:', error);
    });
  }

  atualizarAluno(chave: string) {
    this.route.navigateByUrl(`aluno/${chave}`);
  }

  logout() {
    this.loginService.logout().then(() => {
      this.route.navigateByUrl('/'); // Redirecionar para a página de login após o logout
    }).catch((error) => {
      console.error('Erro ao fazer logout:', error);
    });
  }
}
