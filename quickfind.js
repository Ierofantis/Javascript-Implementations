class QuickFindUF {
  constructor(N) {    
    this.id = [];
    for (var i = 0; i < N; i++) {
      this.id[i] = i;
    }
  }

  // connected(p, q) {
  //   if (this.id[p] == this.id[q]) {
  //     return true
      
  //   }
  // }

  Union(p, q) {
    var pid = this.id[p];
    var qid = this.id[q];

    for (var i = 0; i < this.id.length; i++) {
      if (this.id[i] == pid)
        this.id[i] = qid
        console.log(this.id[i] )
    }
  }
}

var x = new QuickFindUF(17)
console.log(x.Union(3,8));