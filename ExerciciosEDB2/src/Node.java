public class Node {

	public int value;
	
	public Node noEsquerda;
	
	public Node noDireita;
	
	public Node(int value) {
		this.value = value;
	}

	public void add(int value, int parentValue) {
		if (parentValue == this.value) {
			if (noEsquerda == null) noEsquerda = new Node(value);
			else if (noDireita == null) noDireita = new Node(value);
		} else {
			if (noEsquerda != null) noEsquerda.add(value, parentValue);
			if (noDireita != null) noDireita.add(value, parentValue);
		}
	}
	
	public boolean ehFolha() {
		return noEsquerda == null && noDireita == null;
	}
	
	private Node buscarPaiProximaFolha() {
		if (noEsquerda != null && noEsquerda.ehFolha()) return this;
		if (noDireita != null && noDireita.ehFolha()) return this;
		if (noEsquerda != null) return noEsquerda.buscarPaiProximaFolha();
		if (noDireita != null) return noDireita.buscarPaiProximaFolha();
		return null;
	}
	
	private Node deleteNode(Node nodeToDelete) {
		if (nodeToDelete.ehFolha()) return null;
		Node paiProximaFolha = nodeToDelete.buscarPaiProximaFolha();
		Node proximaFolha = paiProximaFolha.noEsquerda;
		if (proximaFolha == null || !proximaFolha.ehFolha()) {
			proximaFolha = paiProximaFolha.noDireita;
			paiProximaFolha.noDireita = null;
		} else {
			paiProximaFolha.noEsquerda = null;
		}
		proximaFolha.noDireita = nodeToDelete.noDireita;
		proximaFolha.noEsquerda = nodeToDelete.noEsquerda;
		return proximaFolha;
	}
	
	public void delete(int value) {
		if (noEsquerda != null && noEsquerda.value == value) {
			noEsquerda = deleteNode(noEsquerda);
		} else if (noDireita != null && noDireita.value == value) {
			noDireita = deleteNode(noDireita);
		} else {
			if (noEsquerda != null) noEsquerda.delete(value);
			if (noDireita != null) noDireita.delete(value);
		}
		
		
		//          A
		//        /   \
		//       /     \
		//      B       C
		//     / \     / \
		//    D   E   F   G
		//             \
		//              H
		//               \
		//                I


		//          A
		//        /   \
		//       /     \
		//      B       F
		//     / \       \
		//    D   E       G
		

		//          A
		//        /   \
		//       /     \
		//      B       H
		//     / \     / \
		//    D   E   F   G
		
	}
	
	private int buscarRecursivo(int value, int nivelAtual) {
		if (value == this.value) {
			return nivelAtual;
		} else {
			int nivelEncontrado=-2;
			if (noEsquerda!=null) {
				nivelEncontrado = noEsquerda.buscarRecursivo(value, nivelAtual+1);
			}
			if (nivelEncontrado!=-1 && noDireita != null) {
				nivelEncontrado = noDireita.buscarRecursivo(value, nivelAtual+1);
			}
		}
		return -1;
	}
	
	public int buscar(int value) {
		return buscarRecursivo(value, 0);
	}
	
	@Override
	public String toString() {
		if (noEsquerda == null && noDireita == null) {
			return "" + value;
		} else {
			return value + " (" + 
					(noEsquerda != null ? noEsquerda : "null") + ", " + 
					(noDireita != null ? noDireita : "null") +")";
		}
	}

}
