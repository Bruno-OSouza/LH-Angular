import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';
import { Vagas } from '../models/Vagas.model';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

  public vaga: Vagas[] = [];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas() {
    this._vagasService.getVagas().subscribe(
      retornaVaga => {
        this.vaga = retornaVaga.map(
          item => {
            return new Vagas(
              item.id,
              item.nome,
              item.foto,
              item.descricao,
              item.salario
            );
          }
        )
      }
    )
  }

}
