<script>
    const linknode = document.createElement("a");
    const textnode = document.createTextNode("Accessibility Feedback"); // German: Feedback zur Barrierefreiheit
    const node = document.createElement("li");
    const icon = document.createElement("i");

    icon.className = "fa-solid fa-arrow-up-right-from-square";
    node.className = "menu-item menu-item-type-post_type menu-item-object-page"
    linknode.href = "https://form.something.com/";
    linknode.target = "_blank";
    linknode.ariaLabel = "Accessibility Feedback. External Link. The form will open in a separate tab." // German: Feedback zur Barrierefreiheit. Externer Link. Das Formular öffnet sich in einem separaten Tab.

    linknode.appendChild(textnode);
    linknode.appendChild(icon);
    node.appendChild(linknode);

    document.getElementById("copyright-menu").appendChild(node);
</script>
