import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AlunoComponent } from './pages/aluno/aluno.component';
import { PublicaComponent } from './pages/publica/publica.component';
import { PokemonRandomComponent } from './pages/pokemon-random/pokemon-random.component';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
export const routes: Routes = [
  { path: '', component: PublicaComponent },

  { path: 'login', component: LoginComponent },
  { path: 'novaconta', component: CadastroComponent },
  
  { path: 'inicio', component: HomeComponent, canActivate: [AuthGuard], data:{AuthGuardPipe: redirectUnauthorizedToLogin}},
  { path: 'aluno', component: AlunoComponent, canActivate: [AuthGuard], data:{AuthGuardPipe: redirectUnauthorizedToLogin} },
  { path: 'aluno/:chave', component: AlunoComponent, canActivate: [AuthGuard], data:{AuthGuardPipe: redirectUnauthorizedToLogin} },
  { path: 'pokemon-random', component: PokemonRandomComponent, canActivate: [AuthGuard], data:{AuthGuardPipe: redirectUnauthorizedToLogin} },
  { path: '**', component: NotFoundComponent },
];
