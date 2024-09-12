<?php

//FIRST EXO

/* $chiffre=[10,14,18,10];
$eleves=[
    "Ig2b" => ["Samake","Oumar","albachar"],
    "Ig2a"=>["Moussa","daouda","ali"],

];
    foreach ($eleves as $classe => $eleve) {
       echo "La classe $classe: \n";
       foreach ($eleve as $nom) {
        echo "- $nom\n";
       }
       echo " \n";
    }*/

/*
$notes=[];
$choix=null;
while ($choix !== "fin") {
    $choix=readline("Entrer une note ou taper (fin) :");

if ($choix !== "fin") {
    $notes[]=(int)$choix;
}
}
foreach ($notes as $note) {
 echo "- $note\n";
}
*/


$credos=[];
$choix=null;

while (true) {
     $heure_debut=(int)readline("veuillez entrer l'heure de debut :");
   $heure_fin=(int)readline("veuillez entrer l'heure de fin :");
   
   if ($heure_debut>=$heure_fin) {
   echo"Desolé le credo ne peux etre enregistrer car la date de debut est superieur à la date de fin";
   }
   else{
  $credos[]=[$heure_debut,$heure_fin];
 $choix=readline("Voulez vous ajouter un nouveau credo (o/n):");
 if ($choix==="n") {
    break;
}
   }
}
$heure=(int)readline("A quel heure voulez vous visitez le resto ?");
$credotrouvez=false;
foreach ($credos as $credo) {
 if ($heure>=$credo[0]&& $heure<=$credo[1]) {
   $credotrouvez=true;
   break;
}
}
if ($credotrouvez) {
    echo"le magasin sera ouvert";
}else {
    echo"désole, le magasin sera fermé";
}