function calcularIdade() {
    const diaInp = document.getElementById("dia").value
    const mesInp = document.getElementById("mes").value
    const anoInp = document.getElementById("ano").value

    const diaSpan = document.getElementById("span-dia")
    const mesSpan = document.getElementById("span-mes")
    const anoSpan = document.getElementById("span-ano")

    const data = new Date()

    let diaAtual = data.getDate()
    let mesAtual = 1 + data.getMonth()
    let anoAtual = data.getFullYear()

    const meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (diaInp > diaAtual) {
      diaAtual += meses[mesAtual - 1]
      mesAtual -= 1
    }

    if (mesInp > mesAtual) {
      mesAtual += 12
      anoAtual -= 1
    }


    if (diaInp == false) {
      document.getElementById("dia-erro").innerHTML = "This field is required"
      document.getElementById("dia").style.borderColor = "hsl(0, 100%, 67%)"
      document.getElementById("p-day").style.color = "hsl(0, 100%, 67%)"
      diaSpan.innerHTML = "- -"
    } else if (diaInp > 31 || diaInp < 1) {
      document.getElementById("dia-erro").innerHTML = "Must be a valid day"
      document.getElementById("dia").style.borderColor = "hsl(0, 100%, 67%)"
      document.getElementById("p-day").style.color = "hsl(0, 100%, 67%)"
      diaSpan.innerHTML = "- -"
    } else {
      document.getElementById("dia-erro").innerHTML = ""
      document.getElementById("dia").style.borderColor = "hsl(0, 0%, 86%)"
      document.getElementById("p-day").style.color = "hsl(0, 1%, 44%)"
      let diasVida = diaAtual - diaInp
      diaSpan.innerHTML = diasVida
    }

    if (mesInp == false) {
      document.getElementById("mes-erro").innerHTML = "This field is required"
      document.getElementById("mes").style.borderColor = "hsl(0, 100%, 67%)"
      document.getElementById("p-mes").style.color = "hsl(0, 100%, 67%)"
      mesSpan.innerHTML = "- -"
    } else if (mesInp > 12 || mesInp < 1) {
      document.getElementById("mes-erro").innerHTML = "Must be a valid month"
      document.getElementById("mes").style.borderColor = "hsl(0, 100%, 67%)"
      document.getElementById("p-mes").style.color = "hsl(0, 100%, 67%)"
      mesSpan.innerHTML = "- -"
    } else {
      document.getElementById("mes-erro").innerHTML = ""
      document.getElementById("mes").style.borderColor = "hsl(0, 0%, 86%)"
      document.getElementById("p-mes").style.color = "hsl(0, 1%, 44%)"
      let mesesVida = mesAtual - mesInp
      mesSpan.innerHTML = mesesVida
    }

    if (anoInp == false) {
      document.getElementById("ano-erro").innerHTML = "This field is required"
      document.getElementById("ano").style.borderColor = "hsl(0, 100%, 67%)"
      document.getElementById("p-ano").style.color = "hsl(0, 100%, 67%)"
      anoSpan.innerHTML = "- -"
    } else if (anoInp > anoAtual) {
      document.getElementById("ano-erro").innerHTML = "Must be in the past"
      document.getElementById("ano").style.borderColor = "hsl(0, 100%, 67%)"
      document.getElementById("p-ano").style.color = "hsl(0, 100%, 67%)"
      anoSpan.innerHTML = "- -"
    } else if (anoInp < 1) {
      document.getElementById("ano-erro").innerHTML = "Must be a valid year"
      document.getElementById("ano").style.borderColor = "hsl(0, 100%, 67%)"
      document.getElementById("p-ano").style.color = "hsl(0, 100%, 67%)"
      anoSpan.innerHTML = "- -"
    } else {
      document.getElementById("ano-erro").innerHTML = ""
      document.getElementById("ano").style.borderColor = "hsl(0, 0%, 86%)"
      document.getElementById("p-ano").style.color = "hsl(0, 1%, 44%)"
      let anosVida = anoAtual - anoInp
      anoSpan.innerHTML = anosVida
    }
  }