<script>
    const linknode = document.createElement("a");
    const textnode = document.createTextNode("Feedback zur Barrierefreiheit ");
    const node = document.createElement("li");
    const icon = document.createElement("i");

    icon.className = "fa-solid fa-arrow-up-right-from-square";
    node.className = "menu-item menu-item-type-post_type menu-item-object-page"
    linknode.href = "https://form.kathrinfausel.de/";
    linknode.target = "_blank";
    linknode.ariaLabel = "Feedback zur Barrierefreiheit. Externer Link. Das Formular öffnet sich in einem separaten Tab."

    linknode.appendChild(textnode);
    linknode.appendChild(icon);
    node.appendChild(linknode);

    document.getElementById("copyright-menu").appendChild(node);
</script>
