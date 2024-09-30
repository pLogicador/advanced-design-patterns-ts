# Padrões de Projeto de Criação (creational)

### Os **padrões de projeto de criação** são abordagens que facilitam a criação e a instância de objetos em um sistema. Eles abstraem a forma como os objetos são gerados, tornando o sistema menos dependente de implementações específicas. Com isso, conseguimos flexibilidade, já que a complexidade da criação dos objetos é delegada a outros componentes.

### Esses padrões têm como principal objetivo ocultar detalhes sobre **como**, **quando** e **por quem** os objetos são criados, permitindo que os desenvolvedores se concentrem no que realmente importa, sem se preocupar com a implementação interna.

## Padrões e suas Intenções
Aqui estão os padrões de criação originais do "Gang of Four" (GoF), junto com suas intenções:

1. **Abstract Factory**: Oferece uma interface para criar famílias de objetos relacionados sem especificar suas classes concretas.

2. **Builder**: Separa a construção de um objeto complexo da sua representação, permitindo que o mesmo processo construa diferentes tipos de objetos.

3. **Factory Method**: Define uma interface para a criação de objetos, mas permite que as subclasses decidam qual classe instanciar. Isso adia a decisão de criação para as subclasses.

4. **Prototype**: Define os tipos de objetos a serem criados com base em um protótipo e gera novos objetos copiando esse protótipo.

5. **Singleton**: Garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a ela.