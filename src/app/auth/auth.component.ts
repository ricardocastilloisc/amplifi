import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  title = 'amplify-angular-auth';
  user: CognitoUserInterface | undefined;
  authState: AuthState;

  constructor(private ref: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })
  }
  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
