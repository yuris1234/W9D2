const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    if (htmlElement.children.length > 0) {
        htmlElement.innerHTML = '';
    }
    const p = document.createElement("p");
    p.innerText = string;
    htmlElement.append(p);
};

htmlGenerator('Party Time.', partyHeader);