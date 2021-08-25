import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './_layout/private-layout/private-layout.component';
import { AuthGuard } from './_guards/auth.guard';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';
import { ChangelogComponent } from './changelog/changelog.component';

const appRoutes: Routes = [
  // Public layout
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: '', component: LoginComponent }
    ]
  },
  // Private layout
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      { path: 'logout', component: LoginComponent, canActivate: [AuthGuard] },
      { path: 'changelog', component: ChangelogComponent, canActivate: [AuthGuard] },
      { path: 'dashboard', loadChildren: () => import('../app/content/dashboard/dashboard.module').then(m => m.DashboardModule)
      , canActivate: [AuthGuard] },
      { path: 'users', loadChildren: () => import('../app/content/user-management/user-management.module').then(m => m.UserManagementModule)
      , canActivate: [AuthGuard] },
      { path: 'roles', loadChildren: () => import('../app/content/role-management/role-management.module').then(m => m.RoleManagementModule)
      , canActivate: [AuthGuard] },
      { path: 'meetups', loadChildren: () => import('../app/content/meetups/meetups.module').then(m => m.MeetupsModule)
      , canActivate: [AuthGuard] },
      { path: 'mentors', loadChildren: () => import('../app/content/mentors/mentors.module').then(m => m.MentorsModule)
      , canActivate: [AuthGuard] },
      { path: 'testimonial', loadChildren: () => import('../app/content/testimonials/testimonials.module').then(m => m.TestimonialsModule)
      , canActivate: [AuthGuard] },
      { path: 'coupons', loadChildren: () => import('../app/content/coupons/coupons.module').then(m => m.CouponsModule)
      , canActivate: [AuthGuard] },
      { path: 'communitie', loadChildren: () => import('../app/content/communities/communities.module').then(m => m.CommunitiesModule)
      , canActivate: [AuthGuard] },
    ],
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'dashboard' }
];

export const routing = RouterModule.forRoot(appRoutes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' });
