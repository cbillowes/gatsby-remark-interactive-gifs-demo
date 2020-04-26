`gif:nyancat.gif`

<div class="reading">

> **Gotchas:** A fresh copy needs to be downloaded to play a gif from the beginning.
> There is no loading mechanism which could be trouble for larger gifs.
> Any caching strategies are bypassed. This will be fixed in a future release.

# How to use

Start by adding the **gif:** protocol to inline code in your markdown files.
Specify the name and extension of the gif you want to embed.
You have already done the heavy lifting by [configuring](https://github.com/cbillowes/gatsby-remark-interactive-gifs)
the plugin to grab images from a source directory and copy them to the public destination directory.

# Customize

You can customize your embedded gif by providing an **id**, **class**, and a **caption**
in no particular order.

The embedded container will be assigned the element ID and/or class name when set.
The caption will appear below the image.

## Caption

`gif:dolphin.gif:caption=So long and thanks for all the fish`

```
`gif:dolphin.gif:caption=So long and thanks for all the fish`
```

## Class

`gif:marvin.gif:class=grayscale`

```
`gif:marvin.gif:class=grayscale`
```

Below is a snipped of the class I defined that will make the embedded images grayscale.
```
.grayscale {
  filter: grayscale(1);
}
```

# Error handling

If you have a typo in your image name or the image is missing from the public directory, then a placeholder image will display.

```
`gif:look-away.gif`
```

`gif:look-away.gif`

You need to supply a **placeholder** image. If you don't want this feature enabled you can override it with
the styles.

# Oh for the love of gifs!

`gif:panic.gif:id=douglas-adams`

`gif:thursday.gif`

---

# GraphQL source nodes

You can access your images using graphql queries.
The schema looks like this:

```
useStaticQuery(
  graphql`
    query {
      allInteractiveGif {
        edges {
          node {
            height
            absolutePath
            base64
            relativePath
            sourcePath
            stillRelativePath
            width
          }
        }
      }
    }
  `
)
```

These images are loaded using **base64** from GraphQL and using the **relative paths** the image names are displayed for reference.


</div>
