function Node(data, value, left, right) { 
	this.data = data;
	this.value = value;
	this.left = left;
	this.right = right;
}
Node.prototype = {
	constructor: Node,
	show : function() {
		return this.data+" : "+this.value;
	}
}
function BST() {
	this.root = null; 
}
BST.prototype = {
	constructor: BST,
	root : function(){
		return this.root;
	},
	insert : function(data,value) {
		var n = new Node(data, value, null, null); 
		if (this.root == null) {
			this.root = n; 
		} else {
			var current = this.root;
			var parent;
			while (true) {
				parent = current;
				if (data < current.data) {
					current = current.left; 
					if (current === null) {
	               		parent.left = n;
						break; 
					}
				} else if(data > current.data) {
					current = current.right; 
					if (current === null) {
	               		parent.right = n;
						break; 
					}
				} else {
					break;
				}
			}
		}
	},
	inOrder : function(node) { 
		if (!(node === null)) { 
			this.inOrder(node.left);
			console.log(node.show());
			this.inOrder(node.right);
		}
	},
	findData : function(data) {
		var current = this.root; 
		while (current.data != data) {
			if (data < current.data) { 
				current = current.left;
			} else {
            	current = current.right;
          	}
			if (current === null) { 
				return null;
			}
		}
		return current.show(); 
	},
	
	findValue : function(value) {
		//need to fix this bug by searching into all the levelOrder travers
		var current = this.root; 
		var treeData = this.levelOrder();

		while(treeData.length > 0){
			var data = treeData.pop();
			var res = data.split(" : ");
			if(res.indexOf(value) >= 1){
				console.log(res);
				break;
			}
		}
		//console.log("Not found");
	},

	levelOrder : function() {
		var current = this.root; 
    	var h = this.height(current);
    	var output = [];
    	for (var i=1; i<=h; i++)
    	{
    		output.push("Level : "+i);
        	this.givenLevel(current, i , output);
        	output.push();
    	}
    	return output;
	},
 
	/* Print nodes at a given level */
	givenLevel : function (node, level,output)
	{
    	if (node === null)
	        return;	
	    if (level == 1)
   	    	output.push(node.show());
	    else if (level > 1)
	    {
	        this.givenLevel(node.left,level-1,output);
	        this.givenLevel(node.right,level-1,output);
	    }
	},
	height : function (node)
	{
    	if (node==null)
        	return 0;
    	else
	    {
	        /* compute the height of each subtree */
	        var lheight = this.height(node.left);
	        var rheight = this.height(node.right);
	 
	        /* use the larger one */
	        if (lheight > rheight)
	            return(lheight+1);
	        else return(rheight+1);
	    }
	}
 
}


