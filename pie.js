function Pie(x,y,w,h,array)
{
 this.x = x;
 this.y = y;
 this.w = w;
 this.h = h;

 this.pieces = [];

 for (var i = 0; i < array.length; i++)
 {
   this.pieces[i] = new Piece(x,y,w,h, i * 360 / array.length, i * 360 / array.length + 360 / array.length, array[i]);
 }

 this.draw = function()
 {
   for (var i = 0; i < array.length; i++)
   {
     this.pieces[i].draw();
   }
 }
}
