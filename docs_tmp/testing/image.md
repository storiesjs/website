# Image Component

```md
![Logo](/img/img.jpeg)
```

with Nextra, is equivalent to

```jsx
import Image from 'next/image'
import img from '../../public/img.jpeg'

<Image src={img} alt="Logo" placeholder='blur'>
```

Example:

![An image](/img/img.jpeg)