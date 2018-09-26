class Euler25{
  constructor( limit ){
    this.nums = [ [ 1 ], [ 1 ] ];
    this.num_limit = limit;
  }
  CheckNumber( index ){
    for( var i = 0; i < this.nums[ index ].length; i++ ){
      var temp = this.nums[ index ][ i ];
      var temp_limit = 10 ** this.num_limit;
      if( temp.toString().length == ( this.num_limit + 1 ) ){
        if( ( i + 1 ) == this.nums[ index ].length )
          this.nums[ index ].push( ( temp - temp % temp_limit ) / temp_limit );
        else
          this.nums[ index ][ i + 1 ] += ( temp - temp % temp_limit ) / temp_limit;
        this.nums[ index ][ i ] = temp % temp_limit;
      }
    }
  }
}

var euler25 = new Euler25(9);
for( var i = 1; euler25.nums[ i ].length < 112; i++ ){
  var temp = euler25.nums[ i ].slice();
  for( var j = 0; j < euler25.nums[ i - 1 ].length; j++ ){
    temp[ j ] += euler25.nums[ i - 1 ][ j ];
  }
  euler25.nums.push( temp );
  euler25.CheckNumber( i + 1 );
}
euler25.nums.length;
