document.getElementById('formCadastro').addEventListener('submit', async (event) =>{
    event.preventDefault();

    const name = document.getElementById('nome').value; 
    const cpf = document.getElementById('cpf').value; 
    const phone = document.getElementById('telefone').value; 


    const personData = {
        name: name,
        cpf: cpf,
        phone: phone,
    }


    try{
        const response = await fetch("http://localhost:8080/person", {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(personData)
        });

        console.log(`Status da resposta: ${response.status}`);
        console.log(`Resposta recebida: ${await response.text()}`);
    
        const result = await response.json();

        if(response.ok){
            document.getElementById('message').innerText = 'Cadastro enviado com sucesso';
            document.getElementById('formCadastro').reset();
        } else {
            document.getElementById('message').innerText = `Erro: ${result.message}`;
        }
    } catch (error){
        document.getElementById('message').innerText = "Erro no servidor";
    }
})