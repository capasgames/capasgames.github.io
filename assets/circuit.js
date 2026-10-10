/* Pure circuit model: N=1, E=2, S=4, W=8. A connection conducts only when both tiles meet. */
(function(root){
  'use strict';
  const baseMasks=[2,3,5,3,3,3,5,3,1];
  const initialRotations=[0,0,1,2,2,0,0,1,0];
  function rotateMask(mask,turns){
    for(let i=0;i<((turns%4)+4)%4;i++) mask=((mask<<1)&15)|((mask>>3)&1);
    return mask;
  }
  function poweredTiles(rotations){
    const masks=baseMasks.map((mask,i)=>rotateMask(mask,rotations[i]));
    const powered=new Set([0]);const queue=[0];
    const dirs=[[-3,1,4],[1,2,8],[3,4,1],[-1,8,2]];
    for(let q=0;q<queue.length;q++){
      const at=queue[q];
      dirs.forEach(([delta,out,incoming])=>{
        const next=at+delta;
        if(next<0||next>8||(delta===1&&at%3===2)||(delta===-1&&at%3===0))return;
        if((masks[at]&out)&&(masks[next]&incoming)&&!powered.has(next)){powered.add(next);queue.push(next);}
      });
    }
    return powered;
  }
  root.CapasCircuit={baseMasks,initialRotations,rotateMask,poweredTiles};
})(globalThis);
