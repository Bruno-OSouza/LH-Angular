import { Component, OnInit } from '@angular/core';
import { Vagas } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {

  public vaga: Vagas = new Vagas(0,"","","",0);

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      vaga => {this.vaga = new Vagas(0,"","","",0)},
      erro => {console.log("erro ao cadastrar")}
    );

    window.location.href = "/mural-vagas";
  }

  atualizar(id: number){
    this._vagasService.atualizarVaga(id,this.vaga).subscribe(
      vaga => {this.vaga = new Vagas(0,"","","",0)},
      erro => {console.log("erro ao atualizar")}
    );

    window.location.href = "/mural-vagas";
  }

  excluir(id: number){
    this._vagasService.excluirVaga(id).subscribe(
      vaga => {this.vaga = new Vagas(0,"","","",0)},
      erro => {console.log("erro ao Excluir")}
    );

    window.location.href = "/mural-vagas";

  }

}


