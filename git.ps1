git pull
git add .
$commit = Read-Host escreva seu commit
git commit -m "$commit"
$opcao = Read-Host digite 1 para push;
if ($opcao -eq 1) {
    git push -u origin main
}
