# Proyecto: tienda web de Whale Black

Este archivo le da contexto a Claude Code. Resume todo lo que Andrés y José Miguel definieron con Claude antes de empezar a programar.

Objetivo: construir la página web propia de Whale Black (moda en tendencia, Medellín), moderna y muy bien diseñada. Más adelante tendrá un perchero interactivo, vista de frente y espalda de cada prenda y un probador con la cámara.

Los dos dueños no tienen experiencia programando: explica cada paso en español y en palabras sencillas.

---

# Plan e-commerce de moda premium en Medellín

Plan de primeros pasos para Andrés y José Miguel: tienda online de moda en tendencia, dirigida a público de estratos altos de Medellín, con entrega rápida y una web moderna e interactiva hecha con ayuda de IA (Claude Code).

## Para José Miguel: lo que hablamos

No arrancamos de cero: la base es Whale Black, que ya vende por Instagram y TikTok. El plan es llevarla a una página web propia y posicionarla como moda premium.

Resumen de la conversación entre Andrés y Claude:

- Idea inicial: crear un e-commerce con ayuda de la IA (Claude Code), empezando por una página de tienda de ropa.
- Se habló de mezclar moda y tecnología (ropa gamer), pero se descartó: la decisión es moda pura, sin crear marca de diseño propio.
- Producto: vender lo que está en tendencia en cada momento, rotando rápido. Comprar lotes pequeños o usar dropshipping para no quedarse con inventario.
- Público: se propuso enfocarse en estratos altos, pero José Miguel prefiere abarcar toda la ciudad de Medellín, con clientes que prefieren comprar online y recibir en casa.
- Ventaja frente a Shein y similares: entrega el mismo día, empaque premium, atención por WhatsApp y cambios fáciles.
- Proveedores: aprovechar que Medellín es capital de la moda (El Hueco, talleres de Itagüí).
- La web: moderna y muy bien diseñada, con un perchero interactivo donde las camisetas giran al pasar el cursor, vista de frente y espalda al hacer clic, y un probador virtual con la cámara del celular o del computador. Esto se construye con Claude Code en una segunda etapa.
- Cambio clave: como Whale Black ya existe, la validación está avanzada. Se usa esa marca, sus seguidores y sus ventas como punto de partida.

## Decisiones tomadas (respuestas de José Miguel)

José Miguel respondió el 11 de noviembre de 2026. Estas decisiones ya están aplicadas en las fases de abajo:

| Tema | Decisión |
| --- | --- |
| Marca | Whale Black |
| Público | Toda la ciudad de Medellín, no solo estratos altos |
| Producto | Moda en tendencia: bermudas de algodón perchado, camisetas, tenis, jeans, medias y boxers de marca |
| Proveedores | Centro de Cali y Palacio Nacional, con margen del 45% por prenda |
| Plataforma | Web propia con Claude Code desde el inicio, sin pasar por Shopify |
| Capital | No se necesita: se trabaja con muestras |
| Roles | Los dos trabajan en producto y en tecnología |

Puntos a cuidar: al trabajar con muestras, la entrega el mismo día depende de que el proveedor tenga la prenda disponible. Si los tenis y boxers son de marcas conocidas, conviene confirmar que sean originales, porque vender réplicas trae problemas legales y le quita confianza a la tienda.

## Fase 0: Mentalidad y principio clave

- Lanzar rápido una versión simple (MVP) y mejorar con ventas reales. No esperar a tener la web perfecta para vender.
- Las funciones avanzadas (perchero 3D, probador con cámara) llegan en una segunda etapa, cuando ya haya ventas y fotos de producto.
- Roles: los dos trabajan a la par en producto, tendencias, web y tecnología.

## Fase 1: Validación (ya avanzada con Whale Black)

- Definir el cliente ideal en toda Medellín: edad, estilo, barrio, qué marcas compra hoy y dónde.
- Investigar tendencias en TikTok, Instagram, Pinterest y Google Trends (filtrado a Colombia).
- Estudiar 5 a 10 tiendas competidoras locales e internacionales: precios, fotos, envíos, políticas de cambio.
- Whale Black ya vende en Instagram y TikTok: revisar qué prendas se venden más, a qué precio y a qué tipo de cliente, y usar eso para elegir el catálogo inicial de la web.

## Fase 2: Proveedores y producto (semanas 2 a 4)

- Proveedores actuales: Centro de Cali y Palacio Nacional. Comparar calidad, telas y acabados con otros mayoristas para tener alternativas.
- Trabajar con muestras: fotografiar la prenda de muestra, publicarla y comprarla al proveedor solo cuando se venda. Así no se necesita capital ni inventario.
- Negociar reposición rápida y, si es posible, exclusividad en algunos diseños.
- Calcular margen por prenda: costo + empaque + envío + comisión de pago + publicidad. El margen actual es del 45% por prenda; revisar que alcance para cubrir envío, comisión de pago y publicidad.

## Fase 3: Marca y legal (en paralelo)

- Aunque vendan tendencia y no diseños propios, la tienda sí necesita nombre, logo y estética premium: eso justifica el precio.
- Verificar que el nombre esté libre en la SIC y en redes sociales; registrar el dominio .com o .co.
- Formalizarse: RUT ante la DIAN, registro en la Cámara de Comercio de Medellín (por ejemplo como SAS), facturación electrónica y cuenta bancaria del negocio. Conviene consultar con un contador.
- Políticas claras: cambios y devoluciones, privacidad y tratamiento de datos (Ley 1581), términos y condiciones.

## Fase 4: La tienda online (MVP, semanas 3 a 6)

Opción A, la más rápida: Shopify con un tema premium, personalizado con ayuda de Claude.

Opción B, la más diferenciada: tienda propia construida con Claude Code, por ejemplo con Next.js para el frontend y Shopify (modo headless) o Medusa para productos, inventario y pedidos. Alojamiento en Vercel.

Decisión: ir directamente con la opción B, una web propia construida con Claude Code.

Imprescindible en el MVP:

- Diseño limpio y lujoso, muy buenas fotos, carga rápida en celular (la mayoría comprará desde el móvil).
- Pagos: Wompi (Bancolombia) o Mercado Pago, con tarjeta, PSE y Nequi.
- Botón de WhatsApp para atención personalizada.
- Guía de tallas detallada.

## Fase 5: La experiencia "wow" (después del lanzamiento)

- Perchero interactivo: camisetas colgadas que se giran al pasar el cursor. Se puede hacer con animaciones CSS o con Three.js / React Three Fiber para efecto 3D. Claude Code puede ayudar a construirlo paso a paso.
- Vista frente y espalda: al hacer clic, abrir la prenda y voltearla con una animación. Requiere fotos de frente y espalda de cada prenda (o modelos 3D).
- Probador virtual con cámara: se puede integrar un servicio de "virtual try-on" con IA o usar realidad aumentada en el navegador. Es lo más complejo; conviene probarlo con pocas prendas primero y medir si aumenta las ventas.
- Ojo: estas funciones deben verse bien también en celular y no hacer lenta la página.

## Fase 6: Logística y experiencia de entrega

- Entrega el mismo día en toda Medellín, cuando el proveedor tenga la prenda disponible (mensajero propio o servicios de mensajería locales); envíos nacionales con transportadoras como Servientrega, Coordinadora o Interrapidísimo.
- Empaque premium: caja o bolsa de marca, papel de seda, tarjeta de agradecimiento.
- Cambios fáciles y rápidos: es clave para generar confianza.

## Fase 7: Marketing y lanzamiento

- Contenido diario en Instagram y TikTok: outfits, tendencias, "llegó lo nuevo".
- Alianzas con microinfluencers de Medellín.
- Publicidad pagada en Meta y TikTok con presupuesto pequeño al inicio, segmentada por zonas.
- Lista de clientes por WhatsApp y correo para lanzamientos exclusivos ("drops").

## Fase 8: Medir y mejorar

- Métricas clave: ventas, conversión de la web, costo por cliente, ticket promedio, prendas más vendidas, devoluciones.
- Rotar inventario según lo que se vende; sacar rápido lo que no.
- Reinvertir las ganancias en producto y en la experiencia web.

## Cronograma resumido

- Semanas 1 a 2: validación y prueba en Instagram/WhatsApp.
- Semanas 2 a 4: proveedores, marca y formalización.
- Semanas 3 a 6: tienda MVP y lanzamiento.
- Mes 2 a 3: funciones interactivas con Claude Code, influencers y escalar publicidad.

## Próximo paso inmediato

Esta semana: con las decisiones ya tomadas, registramos el dominio de Whale Black, elegimos las primeras 10 a 20 prendas en tendencia y hacemos una sesión de fotos de frente y espalda para la web.
