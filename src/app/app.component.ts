import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { log } from 'node:console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  news:any;
  active:string='active'
  classId='home' 
  searchNews='';
  title = 'angular';
  change='country=us';
  mytoast:any;
  constructor (private userservice:UserService,private toastr:ToastrService){}

  showtoaster(){
  }
  
ngOnInit(){
   this.userservice.getProductdata(this.change).subscribe((data:any)=>{
      const newsdata=data;
      this.news=newsdata.articles;
    });
  }
  changeurl(url:string,event:Event){
    this.change=url;
    this.classId= (event.target as HTMLElement).id;
    this.ngOnInit();
  }
  Search(){
    if(this.searchNews===''){
      this.toastr.show('Enter the author name!');
      this.ngOnInit();
    }
    else{
      this.news=this.news.filter((article:any)=>article.author ===this.searchNews);
      }
    }
}
