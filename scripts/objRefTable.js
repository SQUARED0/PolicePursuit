const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.Anchor,
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Behaviors.Tween,
		C3.Plugins.Spritefont2,
		C3.Plugins.NinePatch,
		C3.Behaviors.solid,
		C3.Behaviors.Pathfinding,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.Bullet,
		C3.Behaviors.Rotate,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Plugins.PlatformInfo,
		C3.Plugins.LocalStorage,
		C3.Plugins.Touch,
		C3.Plugins.Keyboard,
		C3.Plugins.Arr,
		C3.Behaviors.EightDir,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.PlatformInfo.Cnds.IsOniOS,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Audio.Acts.SetSilent,
		C3.Plugins.Browser.Cnds.IsFullscreen,
		C3.Plugins.Browser.Acts.CancelFullScreen,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.LocalStorage.Cnds.CompareValue,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Arr.Acts.SetX,
		C3.Plugins.Arr.Acts.JSONLoad,
		C3.Plugins.Arr.Exps.AsJSON,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Arr.Cnds.CompareX,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.Tween.Cnds.IsAnyPlaying,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Acts.SetLayerInteractive,
		C3.Plugins.System.Exps.layoutname,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Cnds.CompareOpacity,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Plugins.System.Exps.choose,
		C3.Behaviors.EightDir.Acts.Stop,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.EightDir.Acts.SetEnabled,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.System.Acts.SetObjectTimescale,
		C3.Behaviors.Tween.Acts.TweenValue,
		C3.Plugins.System.Cnds.Every,
		C3.Behaviors.Pathfinding.Acts.FindPath,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Behaviors.Pathfinding.Acts.StartMoving,
		C3.Plugins.Sprite.Cnds.IsOnScreen,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Behaviors.Tween.Cnds.IsPlaying,
		C3.Plugins.System.Acts.SetLayerScale,
		C3.Behaviors.Tween.Exps.Value
	];
};
self.C3_JsPropNameTable = [
	{Anchor: 0},
	{TiledBackground: 0},
	{Sine: 0},
	{Gamelogo: 0},
	{Tween: 0},
	{btnCars: 0},
	{btnLevels: 0},
	{btnPlay: 0},
	{boardCoin: 0},
	{btnFullscreen: 0},
	{btnSound: 0},
	{TextCoin: 0},
	{carsPlace: 0},
	{TiledBackground2: 0},
	{window: 0},
	{btnHome: 0},
	{btnleft: 0},
	{btnRight: 0},
	{logoCars: 0},
	{btnBuyCar: 0},
	{logoBlockCar: 0},
	{logoPriceCar: 0},
	{TiledBackground3: 0},
	{Solid: 0},
	{"9patchWall": 0},
	{"9patchWall2": 0},
	{GameArrow: 0},
	{LevelsLogo: 0},
	{boardLevels: 0},
	{num: 0},
	{btnLevel: 0},
	{FinishGarage: 0},
	{Pathfinding: 0},
	{Platform: 0},
	{PoliceCar: 0},
	{btnPause: 0},
	{btnOverMenu: 0},
	{btnOverPlay: 0},
	{pauseBoard: 0},
	{FamilyMove: 0},
	{move: 0},
	{ScrollTo: 0},
	{playerCar: 0},
	{Sprite: 0},
	{LoseBoard: 0},
	{btnOverRetry: 0},
	{btnOverNextLevel: 0},
	{winBoard: 0},
	{logoLockLevel: 0},
	{"9patch": 0},
	{speed: 0},
	{PolicMan: 0},
	{TiledBackground4: 0},
	{Bullet: 0},
	{bullet: 0},
	{Coin: 0},
	{"9patch2": 0},
	{TiledBackground5: 0},
	{LogoHand: 0},
	{Sprite2: 0},
	{Rotate: 0},
	{gear1: 0},
	{gear2: 0},
	{gear3: 0},
	{gear4: 0},
	{Audio: 0},
	{Browser: 0},
	{PlatformInfo: 0},
	{LocalStorage: 0},
	{Touch: 0},
	{Keyboard: 0},
	{UnlockCars: 0},
	{"8Direction2": 0},
	{car: 0},
	{Walls: 0},
	{sound: 0},
	{CurLevel: 0},
	{FinishLevel: 0},
	{CurCar: 0},
	{NewFrame: 0},
	{STX: 0},
	{ETX: 0},
	{STY: 0},
	{ETY: 0},
	{XEqual: 0},
	{YEqual: 0},
	{win: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Gamelogo: class extends self.ISpriteInstance {},
	btnCars: class extends self.ISpriteInstance {},
	btnLevels: class extends self.ISpriteInstance {},
	btnPlay: class extends self.ISpriteInstance {},
	boardCoin: class extends self.ISpriteInstance {},
	btnFullscreen: class extends self.ISpriteInstance {},
	btnSound: class extends self.ISpriteInstance {},
	TextCoin: class extends self.ISpriteFontInstance {},
	carsPlace: class extends self.ISpriteInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	window: class extends self.ISpriteInstance {},
	btnHome: class extends self.ISpriteInstance {},
	btnleft: class extends self.ISpriteInstance {},
	btnRight: class extends self.ISpriteInstance {},
	logoCars: class extends self.ISpriteInstance {},
	btnBuyCar: class extends self.ISpriteInstance {},
	logoBlockCar: class extends self.ISpriteInstance {},
	logoPriceCar: class extends self.ISpriteInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	_9patchWall: class extends self.IWorldInstance {},
	_9patchWall2: class extends self.IWorldInstance {},
	GameArrow: class extends self.ISpriteInstance {},
	LevelsLogo: class extends self.ISpriteInstance {},
	boardLevels: class extends self.ISpriteInstance {},
	btnLevel: class extends self.ISpriteInstance {},
	FinishGarage: class extends self.ISpriteInstance {},
	PoliceCar: class extends self.ISpriteInstance {},
	btnPause: class extends self.ISpriteInstance {},
	btnOverMenu: class extends self.ISpriteInstance {},
	btnOverPlay: class extends self.ISpriteInstance {},
	pauseBoard: class extends self.ISpriteInstance {},
	playerCar: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	LoseBoard: class extends self.ISpriteInstance {},
	btnOverRetry: class extends self.ISpriteInstance {},
	btnOverNextLevel: class extends self.ISpriteInstance {},
	winBoard: class extends self.ISpriteInstance {},
	logoLockLevel: class extends self.ISpriteInstance {},
	_9patch: class extends self.IWorldInstance {},
	PolicMan: class extends self.ISpriteInstance {},
	TiledBackground4: class extends self.ITiledBackgroundInstance {},
	bullet: class extends self.ISpriteInstance {},
	Coin: class extends self.ISpriteInstance {},
	_9patch2: class extends self.IWorldInstance {},
	TiledBackground5: class extends self.ITiledBackgroundInstance {},
	LogoHand: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	gear1: class extends self.ISpriteInstance {},
	gear2: class extends self.ISpriteInstance {},
	gear3: class extends self.ISpriteInstance {},
	gear4: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	PlatformInfo: class extends self.IInstance {},
	LocalStorage: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	UnlockCars: class extends self.IArrayInstance {},
	car: class extends self.ISpriteInstance {},
	Walls: class extends self.IWorldInstance {}
}