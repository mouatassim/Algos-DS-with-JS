//Find the Kth node from the end of the linked list in one pass;

function kthNodeFromTheEnd(list,n){

    if(!list.head){
        return null
    }

   let node = list.head;
   let nodeRes = node;

   for (let i = 0; i < n; i++) {
    if(node){
    node = node.next;
    }
    else{
        return null
    }
   }
   
   while(node){
    node = node.next;
    console.log(nodeRes.value);
    nodeRes = nodeRes.next;
   }
   return nodeRes.value;
}


module.exports= {kthNodeFromTheEnd}