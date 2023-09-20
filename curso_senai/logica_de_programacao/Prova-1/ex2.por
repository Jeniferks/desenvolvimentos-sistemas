programa
{
	cadeia pais
	real notaSaude, notaRenda, notaEducacao
	real mediaSetores, idh
	
	funcao inicio()
	{
		escreva("Olá, forneça as informações a seguir para calcular o IDH de seu país\n")
		escreva("Qual o seu país?")
		leia (pais)
		escreva("Qual foi a nota para o setor da saúde?\n")
		leia (notaSaude)
		escreva("Qual foi a nota para o setor da educação?\n")
		leia (notaEducacao)
		escreva("Qual foi a nota para a renda?\n")
		leia (notaRenda)

		mediaSetores = (notaSaude + notaEducacao + notaRenda) / 3
		idh = mediaSetores * 0.1

		se(idh >= 0.800){
			escreva("O" + " " + pais + " " + pais + "possui um IDH com um desenvolvimento muito alto,"+ " " + "com a nota:" + " "+ idh)
		}senao se (idh >= 0.700 e idh<=0.799){
			escreva("O" + " " + pais + " " + " possui um IDH com um alto desenvolvimento,"+ " "+ "com a nota:" + " "+ idh)
			
			}senao se (idh >= 0.556 e idh <=0.699){
			escreva("O" + " " + pais + " "  + "possui um IDH com um médio desenvolvimento,"+ " "+ "com a nota:" + " "+ idh)
	
		}senao{
			escreva("O" + " " + pais + " " + "possui um IDH com um baixo desenvolvimento,"+ " "+ "com a nota:" + " "+ idh) 
	}
}}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 724; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */