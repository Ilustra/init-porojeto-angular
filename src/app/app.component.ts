import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contato } from './bussines/contato';
import { PopAddContatoComponent } from './models/pop-add-contato/pop-add-contato.component';
import { PopUpdateContatoComponent } from './models/pop-update-contato/pop-update-contato.component';
import { ContatoService } from './service/contato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prova-back-end';
  newContato: Contato ={id: '', nome: '', email: '', contato:''};
  search: string='';
  //oninit inicializa a tela
    ngOnInit(): void {
      console.log('---')
      this.getAll();
    }


  public listContatos!: Contato[];
  constructor(public dialog: MatDialog,
    private contatoService: ContatoService) {}


  buscar(){
    console.log(this.search)
    this.contatoService.getid(this.search).subscribe(response=>{
      this.listContatos=response;
    }, error=>{
      console.log('error', error)
    })
  }

    // abre um dialog para inserir novo contato
  openDialogCreate(): void {
    //inoca o view
    const dialogRef = this.dialog.open(PopAddContatoComponent, {
      width: '250px',
    });

    //resultado da view se sucess
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result){
        console.log(result)
      }else
        console.log('error')
    });
  }

  openDialogUpdate(_contato: Contato): void {
    //inoca o view
    const dialogRef = this.dialog.open(PopUpdateContatoComponent, {
      width: '250px',
      data: _contato,
    });

    //resultado da view se sucess
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result){
        console.log(result)
      }else
        console.log('error')
    });
  }


  getAll(){
    this.contatoService.getAll().subscribe(response=>{
      console.log(response)
      this.listContatos = response;
    }, error=>{
      console.log('error', error)
    })
  }

  //deleta um registro e atualiza a list se sucesso
  delete(id: string){
    this.contatoService.delete(id).subscribe(response=>{
      //atualiza a lista exibidas
      this.listContatos = this.listContatos.filter(function(value){
          if(value.id != id){
            return value;
          }else
          return null;
      })
    },
    error=>{
      console.log('error', error)
    })
  }
  update(_contato: Contato){
    console.log(_contato)
    this.contatoService.update(_contato).subscribe(response=>{
      console.log(response)
    },
    error=>{
      console.log('error', error)
    })
  }
  getId(id: string){

    this.contatoService.getid(id).subscribe(response=>{
      console.log(response)
    },
    error=>{
      console.log('error', error)

    })
  }
}
