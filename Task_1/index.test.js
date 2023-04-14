///////////////////////////////////////////////
//###########################################//
//####    To run unit tests pleas run    ####// 
//####    "npm install -g jest"          ####//
//####    "npx jest .\index.test.js"     ####//
//####    commands in Task_1 folder      ####//
//###########################################//
///////////////////////////////////////////////


const assert = require('assert');

const {Node, Tree, compareTrees} = require('./index');

describe('hasChildren', () => {
    it('should return an array of leafs and print the leafs value', () => {
        const root = new Node(5);
        root.left = new Node(3, new Node(2), new Node(5));
        root.right = new Node(7, new Node(1), new Node(0, new Node(2), new Node(8, null, new Node(5))));

        const tree = new Tree(root);
        const consoleSpy = jest.spyOn(console, 'log');
        result = tree.hasChildren();

        expect(consoleSpy).toHaveBeenCalledWith("Number of nodes without any children is : 5");
        assert.deepStrictEqual(result, [2,5,1,2,5]);
    });
    it('should return an empty arr and print "Tree is empty" when tree is empty', () => {
        const tree = new Tree();
        const consoleSpy = jest.spyOn(console, 'log');
        result = tree.hasChildren();

        expect(consoleSpy).toHaveBeenCalledWith("Tree is empty");
        assert.deepStrictEqual(result, [])
    });
    
    
});


describe('longestNode', () => {
    it('should return the longest and print the values of longest node', () => {
        const root = new Node(5);
        root.left = new Node(3, new Node(2), new Node(5));
        root.right = new Node(7, new Node(1), new Node(0, new Node(2), new Node(8, null, new Node(5))));

        const tree = new Tree(root);
        const consoleSpy = jest.spyOn(console, 'log');
        result = tree.longestNode();

        expect(consoleSpy).toHaveBeenCalledWith("Largest numper of edges in path form root to leaf : 5");
        expect(consoleSpy).toHaveBeenCalledWith("Path : 5 -> 7 -> 0 -> 8 -> 5");
        assert.deepStrictEqual(result, [5, 7, 0, 8, 5]);
    });
    it('should return empty array and print "Tree is empty" if tree is empty', () => {
        const tree = new Tree();
        const consoleSpy = jest.spyOn(console, 'log');
        result = tree.longestNode();
        expect(consoleSpy).toHaveBeenCalledWith("Tree is empty");
        assert.deepStrictEqual(result, []);

    });
    
    
});

describe('compareTrees', () => {
    it('should return true if trees are the same', () => {
        const root = new Node(5);
        root.right = new Node(6, new Node(7));
        root.left = new Node(8);

        const tree1 = new Tree(root);
        const tree2 = new Tree(root);        

        const result = compareTrees(tree1,tree2);
        assert.strictEqual(result,true);
    });
    it('should return true if trees have same value and children no matter the ordre of nodes', () => {
        const root1 = new Node(5);
        root1.right = new Node(6, new Node(7));
        root1.left = new Node(8);

        const root2 = new Node(5);
        root2.right = new Node(8);
        root2.left = new Node(6, new Node(7));

        const tree1 = new Tree(root1);
        const tree2 = new Tree(root2);        

        const result = compareTrees(tree1,tree2);
        assert.strictEqual(result,true);
    });
    it('should return false if trees are not the same', () => {
        const root1 = new Node(5);
        root1.right = new Node(6, new Node(5));
        root1.left = new Node(8);

        const root2 = new Node(5);
        root2.right = new Node(8);
        root2.left = new Node(6, new Node(7));

        const tree1 = new Tree(root1);
        const tree2 = new Tree(root2);        

        const result = compareTrees(tree1,tree2);
        assert.strictEqual(result,false);
    });    
});
