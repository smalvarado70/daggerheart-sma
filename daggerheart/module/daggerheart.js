// Register the custom actor and sheet
Hooks.once("init", function () {
  console.log("Daggerheart | Initializing system...");

  CONFIG.Actor.documentClass = DaggerheartActor;

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("daggerheart", DaggerheartActorSheet, {
    types: ["character"],
    makeDefault: true
  });
});

// Basic Actor class (you can expand this later)
class DaggerheartActor extends Actor {}

// Basic custom sheet
class DaggerheartActorSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["daggerheart", "sheet", "actor"],
      template: "systems/daggerheart/module/templates/actor-sheet.html",
      width: 800,
      height: 1000
    });
  }

  getData() {
    const data = super.getData();
    data.system = this.actor.system;
    return data;
  }
}
