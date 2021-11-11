import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContatoService } from 'src/app/service/contato.service';


@Component({
  selector: 'app-pop-add-contato',
  templateUrl: './pop-add-contato.component.html',
  styleUrls: ['./pop-add-contato.component.css']
})
export class PopAddContatoComponent implements OnInit {
  public contatoForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private contatoService: ContatoService,
    public dialogRef: MatDialogRef<PopAddContatoComponent>

  ) {}

  ngOnInit(): void {

    this.contatoForm = this.formBuilder.group({
      nome: [''],
      email: [''],
      contato: ['']
    });
  }
  create(){

    this.contatoService.create(this.contatoForm.value).subscribe(response=>{
      console.log(response)
      this.dialogRef.close(response.data);
    },
    error=>{
      console.log(error)

    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
