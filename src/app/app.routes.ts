import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ModalCastComponent } from './components/modal-cast/modal-cast.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'movies',
                component: MoviesComponent,
            },
            {
                path: 'movie/:id',
                component: MovieDetailsComponent,
                children: [
                    {
                        path: 'cast',
                        component: ModalCastComponent,
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];
