import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { AuthService } from '../services/auth-service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}
  private userRole = '';
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const expectedRole = route.data['role'];
    // this.auth.getUserRole().subscribe((res)=>{
    //   console.log("role-guard");
      
    //   this.userRole = res.role;
    // });
    this.userRole =  this.auth.getUserRole();
    if (this.userRole === expectedRole) {
      return true;
    }

    // Redirect to access denied or login
    return this.router.parseUrl('/not-authorized');
  }
}