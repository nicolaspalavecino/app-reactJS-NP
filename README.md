# app-reactJS-NP : El Caldero Humeante

*El Caldero Humeante* es un proyecto final para el curso de React JS de Coderhouse. Simula un eCommerce cuya temática se centra en el mundo de *Harry Potter*. En esta tienda podrás acceder a una serie de productos destinados a la preparación de pociones en la sección de Productos. 

Adicionalmente, existen otras secciones como 'Inicio', 'Nosotros' y 'Contacto' que buscan complementar a la página principal que contiene los diferentes items para asemejarse aún más a un eCommerce real.

## COMPONENTES Y PAGES
Para jerarquizar los distintos componentes creé una carpeta con el nombre 'pages' y otra con 'components' dentro de la carpeta src. En 'pages' se encuentran las distintas páginas a las cuales puede acceder el usuario: Inicio, Productos, Nosotros, Contacto y adicionalmente Cart y Checkout para llevar a cabo la compra.

Dentro de la carpeta components se encuentran los diferentes componentes que se renderizan dentro de las páginas y App. Cada uno cuenta con una carpeta que contiene el archivo .jsx y un archivo .css que define los estilos de los mismos.

## ROUTING Y NAVEGACIÓN
Dentro de App se encuentran las diferentes rutas que llevan a las distintas páginas en conjunto con el componente ItemDetail que permite visualizar únicamente los datos asociados a un producto en particular. Por otro lado, al finalizar la compra en Checkout agregué el atributo useNavigate de react-router-dom para que al finalizar la compra se redirija al usuario a la página principal.

## CONTEXT
Utilicé context para asignar un contexto a cart y de tal manera brindarle acceso a la información presente dentro del carrito a toda la App. Al finalizar la compra, se vacía el cart para poder ser utilizado nuevamente desde cero.

## FIREBASE 
Toda la información contenida en arrays fue subida a Firestore Database donde se crearon una serie de colecciones para contener dichos datos. Estas colecciones contienen información asociada a los productos, biografías de los magos de la sección 'Nosotros', slides y libros de 'Inicio' y otra contiene todos los datos relacionadas a las órdenes de compra tras llenar los formularios correspondientes. 

Las imágenes de estos arrays fueron guardadas en imgbb.com y el Storage de Firestore para que puedan ser visualizadas al utilizar la app en *Netlify*.
