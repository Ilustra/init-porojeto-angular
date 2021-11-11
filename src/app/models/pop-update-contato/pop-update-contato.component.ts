import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contato } from 'src/app/bussines/contato';
import { ContatoService } from 'src/app/service/contato.service';

@Component({
  selector: 'app-pop-update-contato',
  templateUrl: './pop-update-contato.component.html',
  styleUrls: ['./pop-update-contato.component.css']
})
export class PopUpdateContatoComponent implements OnInit {
 
 
  public contatoForm!: FormGroup
  
  constructor(
    private formBuilder: FormBuilder,
    private contatoService: ContatoService,
    public dialogRef: MatDialogRef<PopUpdateContatoComponent>,
    @Inject(MAT_DIALOG_DATA)  public data: Contato
  ) { }

  ngOnInit(): void {


    this.contatoForm = this.formBuilder.group({
      id: [this.data.id],
      nome: [this.data.nome],
      email: [this.data.email],
      contato: [this.data.contato]
    });
  }
  update(){
    this.contatoService.update(this.contatoForm.value).subscribe(response=>{
      this.dialogRef.close(response.data);
    },
    error=>{
      console.log(error)

    })
  }
}
