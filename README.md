# mousey

mousey is a project to track mouse movement and represent this movement on the circumference of a circle.

Using right-angled triangles, the horizontal and vertical distances of the mouse from the centre of the viewport are trigonometrically equated to a smaller triangle whose hypotenuse is the radius of the outer circle.

We can thus calculate the position of the inner circle (that sits on the circumference) and update these properties in the DOM whenever the mouse is moved.

If the viewport is resized, the midpoint is recalculated.

Click the background for a bit of variety.