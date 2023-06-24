

interface IPlayer {
    attack(loopCount: number): void;
}

class Player<T extends IWeapon> implements IPlayer {
    constructor(weapon: T) {
        this.weapon = weapon;
    }

    weapon: T;

    attack<S extends IMonster>(monster: S): void {
        for (let i = 0; i < loopCount; i++) {
            if (this.weapon.weaponType === WEAPON_TYPE.BLADE) {
                this.weapon.bash()
            } else if (this.weapon.weaponType === 'gun') {
                this.weapon.shoot();
            }
        }
    }
}

enum WEAPON_TYPE {
    BLADE,
    GUN
}

interface IWeapon {
    weaponType: WEAPON_TYPE;
    attack(): number;
}
interface IBlade extends IWeapon {
    weaponType: WEAPON_TYPE.BLADE;
    bash(): number;
}
interface IGun extends IWeapon {
    weaponType: WEAPON_TYPE.GUN;
    shoot(): number;
}

class Weapon implements IWeapon {
    constructor() {
        this.damage = 10;
    }

    damage: number;

    attack(): number {
        return 0;
    }
}

class Blade implements IBlade {
    bash() {
        return 0;
    }
}

class Gun implements IGun {
    shoot() {
        return 0;
    }
}

const player1 = new Player<IBlade>(new Blade());
const player2 = new Player<IGun>(new Gun());
