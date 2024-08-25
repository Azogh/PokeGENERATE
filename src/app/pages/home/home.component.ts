import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AlunoService } from '../../services/aluno.service';
import { MatButtonModule } from '@angular/material/button';
import { AlunoComponent } from '../aluno/aluno.component';
import { AppButtonComponent } from '../../components/app-button/app-button.component';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { toTitleCasePipe } from '../../pipes/toTitleCase.pipe';
import { PokemonRandomComponent } from '../pokemon-random/pokemon-random.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    MatButtonModule, 
    AlunoComponent, 
    AppButtonComponent, 
    MatIcon, 
    toTitleCasePipe,
    RouterLink,
    PokemonRandomComponent,
    MatIcon,
    MatToolbarModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  alunos?: Observable<any>;

  constructor(
    private alunoService: AlunoService, 
    private route: Router
  ) {
    // Obtém a lista de alunos do Firestore
    this.alunos = this.alunoService.listarAlunos();
  }

  // Método para apagar um aluno pelo ID
  apagarAluno(chave: string) {
    this.alunoService.excluirAluno(chave).then(() => {
      console.log('Aluno excluído com sucesso.');
    }).catch((error) => {
      console.error('Erro ao excluir aluno:', error);
    });
  }

  // Método para navegar para a página de edição de aluno
  atualizarAluno(chave: string) {
    this.route.navigateByUrl(`aluno/${chave}`);
  }
}
