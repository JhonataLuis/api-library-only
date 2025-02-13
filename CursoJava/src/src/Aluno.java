package src;

import java.util.List;

/*ESTA É NOSSA CLASSE/OBJETO QUE REPRESENTA O ALUNO*/
public class Aluno extends Pessoa{

	private String dataMatricula;
	private String nomeEscola;
	private String serieMatricula;
	
	//private List<Disciplina> disciplinas = new ArrayList<>();
	
	public String getDataMatricula() {
		return dataMatricula;
	}
	public void setDataMatricula(String dataMatricula) {
		this.dataMatricula = dataMatricula;
	}
	public String getNomeEscola() {
		return nomeEscola;
	}
	public void setNomeEscola(String nomeEscola) {
		this.nomeEscola = nomeEscola;
	}
	public String getSerieMatricula() {
		return serieMatricula;
	}
	public void setSerieMatricula(String serieMatricula) {
		this.serieMatricula = serieMatricula;
	}
	
	public Aluno (String nome) {
		nome = nome;
	}
	
}
