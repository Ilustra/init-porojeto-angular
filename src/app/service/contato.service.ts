import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(  private http: HttpClient, ) { }


  create(contato: any) {
    console.log('create')
    return this.http.post<any>('/api/contatos/', contato);
  }
  update(contato: any) {
    console.log('update')
    return this.http.put<any>('/api/contatos/', contato);
  }

  delete(id: any) {
    console.log('delete')
    return this.http.delete<any>('/api/contatos/'+id);
  }

  getid(text: string) {
    console.log('getid')
    return this.http.get<any>('/api/contatos/'+ text);
  }
  getAll(){
    console.log('getAll')
    return this.http.get<any>('/api/contatos/');
  }
}
