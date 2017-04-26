//扩展选择直接子节点的方法
$.extend($.fn.tree.methods,{
    getLeafChildren:function(jq, params){  
        var nodes = [];  
        $(params).next().children().children("div.tree-node").each(function(){  
            nodes.push($(jq[0]).tree('getNode',this));  
        });  
        return nodes;  
    }  
});
var extTree = {
	//选中所有直接子节点
	selectallChild : function (dom,node){
		dom.tree('uncheck',node.target);
        if (node) {
            var children = dom.tree('getLeafChildren', node.target);
        }
        for (var i = 0; i < children.length; i++) {
            dom.tree('check',children[i].target);
        }
	},
	//设置所有子节点不选中，包含非直接子节点
	setChildUncheck : function (dom,node){
		if (node) {
            var children = dom.tree('getChildren', node.target);
        }
        for (var i = 0; i < children.length; i++) {
            dom.tree('uncheck',children[i].target);
        }
	},
	//递归设置父节点不选中
	setParentUncheck : function (dom,node){
		if (node) {
			var parent=dom.tree('getParent',node.target);
        	if(parent){
        		dom.tree('uncheck',parent.target);
        		this.setParentUncheck(dom,parent);
        	}
		}
	}
}
