import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  obtenerUsuario() {
    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'Diego Pagini');

    const headers = new HttpHeaders({
      'token-usuario': 'ABC123ASD456',
    });

    return this.http.get(`https://reqres.in/api/user`, {
      params: params,
      headers: headers,
    });
  }
}
