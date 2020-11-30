import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public __loaderService : LoaderService
  ) { }
  searchByType=false;

  ngOnInit(): void {
    this.__loaderService.startLoading();
    this.__loaderService.stopLoading();
  }
  
  changeSearchForm(){
    console.log("Called")
    console.log(this.searchByType)
    this.searchByType = !this.searchByType;
    console.log(this.searchByType)
  }

}
