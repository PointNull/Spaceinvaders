# Spaceinvaders
Første programmerings projekt i 3.G


udviklingsprocessen

Først og fremmest hat vi brugt det skelet som Kathrine har gives os.
Vi har implementeret vores egne aliens og lavet nedarvning.
Vi har designet vores eget rumskib.
Vi har få beskyttelses barrikaderne til at fungere delvist.

Svær kode:
Bevægelsen for vores aliens var virkelig svær at forstå til at starte med og er stadig. heldigvis så har alle aliens samme bevægelses mønster.

update(){
        if (this.locationStage == 2016 ) {
            this.y+=3
            this.dx = -this.dx
            this.locationStage++
        }
        else if(this.locationStage== 330){
            this.y+=3
            this.dx = -this.dx
            this.locationStage = -15    

        }
        else {

        this.x += this.dx
        this.locationStage++
        }

    }

Det er tydeligt nu at locationStage er vores aliens position og hvis den når 2016 pixels på x-aksen så rykker den ned med 3 pixels og går den modsatte retning en før. Når den så ender ved 330 pixels så går den også 3 pixels ned og bevæger sig så igen den modsatte retning end før. hvis den ikke har nået nogen af de "locationStages" så skal den bare fortsætte i den samme retning.
