package src;

import javax.swing.JOptionPane;

public class PrimeiraClasse {

	/*VARIÁVEL GLORAL ACESSIVEL A TODOS*/
	static int maiorIdadeGlobal = 30;
	
	public static void main(String[] args) {
		
		/*VARIAVEL LOCAL PORQUE PERTENCE SOMENTE A ESSE MÉTODO E O VALOR FICA SOMENTE DENTRO DO MÉTODO*/
		int maiorIdade = 18;
		
		/*CHAR REPRESENTA UMA LETRA OU UM CARACTER*/
		char pessoaFisica = 'F';
		char pessoaJuridica = 'J';
		char pessoaMasculino = 'M';
		char pessoaFeminino = 'F';
		
		if(pessoaFeminino == 'F') {
			System.out.println("Feminino");
		}else {
			System.out.println("Masculino");
		}
		
		System.out.println("Valor variavel local = " +maiorIdade);

		meteodo2();
		
		/*STRING NO JAVA SEMPRE SERÁ UM TEXTO DE TAMANHO QUALQUER*/
		String textoQualquer = "jtgfiropjtioprejqpot7y489tre74+y tyorpew-íto-p´rew rt89e74wy89+tr7e+9/";
		
		/*CONCATENAÇÃO = UNIR OU JUNTAR DADOS*/
		String nome = "Jhonata Luis";
		String cpf = "488.789.789-85";
		String telefone = "41 995687426";
		String endereco = "Curitiba - PR";
		
		String saida = "Meu nome é : " +nome+"\nCPF : "+cpf+"\nTelefone : "+telefone+"\nEndereço : "+endereco;
		
		System.out.println(saida);
		
		/*OPERAÇÕS LÓGICAS COM IF E ELSE*/
		int mediaAluno = 70;
		String names = "Jhon";

		if(mediaAluno >= 70 && names.equals("Jhon4")) {
			System.out.println("Parabéns, você foi aprovado");
		}
		else if(mediaAluno < 70){
			System.out.println("Você está Reprovado");
		}
		else {
			System.out.println("Aluno não encontrado");
		}
		
		int nota1 = 10;
		int nota2 = 60;
		int nota3 = 70;
		int nota4 = 80;
		int media = 0;
		
		media = (nota1 + nota2 + nota3+ nota4) / 4;
		
		if(media >= 70) {
			System.out.println("Aluno aprovado : " +media);
		}
		else if(media >= 40 && media <= 69) {
			System.out.println("Aluno em recuperação : " +media);
		}
		else {
			System.out.println("Aluno reprovado: " +media);
		}
		
		/*OPERADORES TERNARIOS SÃO PARA MICRO VALIDAÇÕES*/
		String saidaResultado;
		
		saidaResultado = media >= 70 ? "Aluno Aprovado" : "Aluno Reprovado";
		System.out.println(saidaResultado);
		
		/*OPERAÇÕES LOGICAS ANINHADAS SÃO OPERAÇÕES DENTRO DE OPERAÇÕES*/
		
		if(media >= 50) {
			if(media >= 70) {
				System.out.println("Aluno está aprovado direto - Parabéns" +media);
		}else {
			System.out.println("Aluno esta em recuperação");
		}
		
	}else {
		System.out.println("Aluno está em recuperação" +media);
		}
		
		/*SWITCH CASE: OPERAÇÕES EXATAS*/
		int dia = 3;
		switch (dia) {
		case 1:
			System.out.println("Domingo");
			break;
		case 2:
			System.out.println("Segunda-Feira");
			break;
		default: 
				System.out.println("Outro dia qualquer ");
			break;
		}
		
		
		/*ESTRUTURA DE REPETIÇÃO WHILE*/
		
		int number = 0;
		
		while(number <= 10) {/*VERIFICA DEPOIS EXECUTA*/
			
			System.out.println("O numero atual é : " +number);
			number ++;
		}
		
		/******************************************************/
		int number2 = 0;
		do {
			
			System.out.println("O numero atual é : " +number2);
			number2 ++;
			
		}while(number2 <= 10);
		
		/*ESTRUTURA DE REPETIÇÃO FOR*/
			
		for(int numero = 0; numero <= 10; numero++) {
			
			System.out.println("Número atual é : " +numero);
		}
		
		for(int numero2 = 10; numero2 >= 0; numero2--) {
			System.out.println("Resultado é : " +numero2);
		}
		
		/*ESTRUTURA DE REPETIÇÃO POR COM BREAK (PARADA)*/
		for(int numero1 = 0; numero1 <= 10; numero1 ++) {
			if(numero1 == 8) {
				System.out.println("Oba encontrei o número "+numero1);
				System.out.println("Estou parando de executar...");
				break;
			}
		}
		
		/*ESTRUTURA DE REPETIÇÃO FOR CONTINUE*/
		for(int numero1 = 0; numero1 <= 10; numero1 ++) {
			if(numero1 == 8 || numero1 == 6 || numero1 == 9) {
				System.out.println("Oba encontrei o número "+numero1);
				System.out.println("Estou parando de executar...");
				continue;
			}
			//stem.out.println();
		}
		
		/*MODULO RESTO DA DIVISÃO*/
		double carro = 9;
		double pessoa = 2;
		
		double resto = carro % pessoa;
		
		System.out.println("Sobraram exatamente : " + resto + " carros");
		
		
		
		/*ENTRADA DE DADOS NO JAVA*/
		
		String carros = JOptionPane.showInputDialog("Informe a quantidade de carros");
		String pessoas = JOptionPane.showInputDialog("Informe a quantidade de pessoas");
		
		double carroNumero = Double.parseDouble(carros);
		double pessoaNumero = Double.parseDouble(pessoas);
		
		int divisao = (int) (carroNumero / pessoaNumero);
		double restos = carroNumero % pessoaNumero;
		
		int resposta = JOptionPane.showConfirmDialog(null, "Deseja ver o resultado da divisão");
		JOptionPane.showMessageDialog(null, "Divisão para pessoa deu " +divisao+ " carros e soubro " +resto+ " carros");
		
		
	}
	
	
	public static void meteodo2() {
		
		double nota1 = 90;
		double nota2 = 50;
		double nota3 = 56;
		double nota4 = 65;
		
		double mediaFinal = (nota1 + nota2 + nota3 +nota4) /4;
		
		System.out.println("Valor total : " + (nota1 + nota2 + nota3 + nota4) /4);
		
	}
	
	

}
