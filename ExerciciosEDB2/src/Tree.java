
public class Tree {

	public static void main(String[] args) {
		Node raiz = new Node(18);
		
		//            18
		//           /  \
		//          /    \
		//        23      25
		//       /  \    /  \
		//     21    5  19   28
		//                \
		//                 16
		
		

		raiz.add(23, 18);
		raiz.add(25, 18);
		raiz.add(21, 23);
		raiz.add(5, 23);
		raiz.add(19, 25);
		raiz.add(28, 25);
		raiz.add(1, 19);
		raiz.add(16, 19);
		raiz.add(2, 28);
		
		print(raiz);
		
		raiz.delete(1);
		
		print(raiz);
		
		raiz.delete(25);
		
		print(raiz);
		/*

		
		raiz.delete(22);
		
		print(raiz);

		int nivel = raiz.buscar(23);
		System.out.println("O nivel do 23 é: " + nivel);
		int nivel21 = raiz.buscar(21);
		System.out.println("O nivel do 21 é: " + nivel21);
		int nivel42 = raiz.buscar(42);
		System.out.println("O nivel do 42 é: " + nivel42);
		*/
	}
	
	public static void print(Node node) {
		System.out.println(node);
	}
}
