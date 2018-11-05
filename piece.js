function Piece(x, y, w, h, start, stop, name)
{
  this.name = name;

  this.draw = function()
  {
    arc(x, y, w, h, start, stop, PIE);
  }
}
