programa
{	
	
	
	funcao inicio()
	{
		inteiro tempo, tipoConversao
		 
		
		escreva("Olá, este programa foi criado para fazer conversão de tempo!!")
		escreva("\nEscolha o tipo: \n 1-Tempo em minutos \n 2-Tempo em horas\n")	
		leia(tipoConversao)
		escreva("\nDigite o valor que deseja converter\n")
		leia(tempo)

		escolha(tipoConversao){
			caso 1: escreva("O tempo em minutos é:" + " " + (tempo*60) + " " + "minutos")
				pare
				
			caso 2: escreva("O tempo em horas é de" + " " +(tempo / 60) + " " + " horas")
				pare
			caso contrario: escreva("escreva um valor válido")
			
			
			}
		
			
			
		
		
		}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 392; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */