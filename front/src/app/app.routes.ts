import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { TasksPage } from './pages/tasks/tasks.page';
import { TaskIdPage } from './pages/tasks/components/task-id/task-id.page';
import { LoginPage } from './pages/auth/login/login.page';
import { logueadoGuard } from './guards/logueado.guard';
import { NewTaskComponent } from './componentes/new-task/new-task.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'tasks',
        component: TasksPage,
        //canActivate: [logueadoGuard]
    },
    {
        path: 'auth/login',
        component: LoginPage
    },
    {
        path: 'tasks/crear',
        component: NewTaskComponent
    },
    {
        path: 'tasks/:id_tarea',
        component: TaskIdPage
    },

]; 
