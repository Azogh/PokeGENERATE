import { Component, OnInit } from '@angular/core';
import { AppInputComponent } from '../../components/app-input/app-input.component';
import { AppButtonComponent } from '../../components/app-button/app-button.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlunoService } from '../../services/aluno.service';
import { Aluno } from '../../models/aluno';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [AppInputComponent, AppButtonComponent, ReactiveFormsModule, MatButtonModule, MatIconModule],
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss'],
})
export class AlunoComponent implements OnInit {
  form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    data: new FormControl('', [Validators.required]),
  });

  chave: any;

  constructor(
    protected alunoService: AlunoService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.chave = this.activatedRoute.snapshot.paramMap.get('chave');
  }

  ngOnInit() {
    if (this.chave) {
      this.alunoService.buscarAluno(this.chave).subscribe((data) => {
        this.form.setValue({
          nome: data?.['nome'],
          id: data?.['id'],
          data: data?.['data'],
        });
      });
    }
  }

  salvar() {
    if (this.form.valid) {
      const aluno = this.form.value as unknown as Aluno;
      this.alunoService.salvarAluno(aluno, this.chave).then(() =>
        this.route.navigate(['/inicio'])
      );
    }
  }

  voltar() {
    this.route.navigate(['/inicio']);
  }
}
