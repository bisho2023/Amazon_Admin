import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styles: [`* {
    margin: 0px;
    padding: 0px;
    /* font-family: 'Times New Roman', Times, serif; */
    font-size: 13px;
    line-height: 19px;
    color: #111;
    font-family: Arial, sans-serif;
}


.login {



    display: flex;
    justify-content: center;
    align-items: center;
}

.logo {

    height: 90px;
    width: 140px;
    margin-top:10px

   
}

.card {

    width: 296px;
    height: 240px;
    padding: 20px 26px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 20px auto 25px auto;
   /* margin-bottom: 18px!important; */
}




.card h1 {

    font-weight: 400;
    font-size: 28px;
    line-height: 1.2;
   
}

.card label {
   
    font-weight: 400;
    font-size: 13px;
    padding-left: 2px;
    padding-bottom: 2px;
    color: #111;
    
}

.card input {



    width: 272px;
    height: 25px;


    padding: 3px 7px;
    background-color: #fff;

    margin-top: 3px;
    border-radius: 3px;
    border: 1px solid #a6a6a6;
}
.card input:focus{

    border-color: #e77600;
    border-top-color: rgb(231, 118, 0);
    border-right-color: rgb(231, 118, 0);
    border-bottom-color: rgb(231, 118, 0);
    border-left-color: rgb(231, 118, 0);
    box-shadow:0 0 3px 2px rgb(228 121 17 / 50%);
}



.card button {



    width: 288px;
    height: 31px;
    background-color: #f0c14f;

    padding: 3px 7px;
    background-color: #fff;

    margin-top: 15px;
    border-radius: 3px;
    border: 1px solid #a6a6a6;
    border-top-color: #949494;
    background-image: linear-gradient(#f7da90, #e2b33b);

}

.card p,
.card a {

    font-size: 12px;

    line-height: 1.5;
}

a {

    text-decoration: none;
    color: #0066c0;
}

.card a {

    margin-top: 10px;
    font-size: 13px;

}

.icon::before {


    display: inline-block;
    content: "";
    border-top: 5px solid transparent;

    border-left: 5px solid #949494;
    border-bottom: 5px solid transparent;
    margin-right: 10px;

}

.breck p {


    line-height: 1;
    font-size: 12px;
    color: #767676;
    font-weight: 400;

    position: relative;
    display: inline-block;
    background-color: #fff;
    padding: 0 8px 0 7px;
    /* padding-top: 0px;
    padding-right: 8px;
    padding-bottom: 0px;
    padding-left: 7px; */
}

.breck,
.btn {


    display: flex;
    justify-content: center;
}


.breck::after,
.breck::before {


    content: "";
    position: relative;
    top: 5px;
    display: inline-block;
    width: 120px;
    border-top: 1px solid #e7e9e7;

}

.btn button {

    width: 343px;
    height: 31px;
    margin: 15px auto;
    background-color: #e7e9e7;
    background-image: linear-gradient(#f9f9fa, #e7e9e7);
    border: 1px solid #a6a6a6;
    border-top-color: #949494;
    border-radius: 3px;

}

.link {
    
    font-size: 11px!important;
    line-height: 1.465!important;
    /* margin-bottom: 10px!important; */

    display: flex;
    justify-content: space-between;
    width: 250px;
    margin: 25px auto 15px auto;
}

.p{
    color: #555!important;

    font-size: 11px!important;
    line-height: 1.465!important;




    display: flex;
    justify-content: space-between;
    margin: 25px auto 15px auto;
    width: 250px;
}
a:hover{
    text-decoration: underline;
    text-decoration-line: underline;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial;
    cursor: pointer;
    color: #c45500;

    
}`
  ]
})
export class LoginComponent {
  constructor(
    // public authService: AuthService
  ) { }
  ngOnInit() { }
}
