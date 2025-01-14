SpriteMorph.prototype._initBlocks = SpriteMorph.prototype.initBlocks;
SpriteMorph.prototype.initBlocks = function () {
    this._initBlocks();
    Object.keys(this.blocks).forEach(key => {
        if (['motion', 'looks', 'sound', 'pen'].includes(this.blocks[key].category)) {
            delete this.blocks[key];
        }
    });
    Object.assign(
        SpriteMorph.prototype.blocks, {
            move: {
                only: SpriteMorph,
                type: 'command',
                category: 'motion',
                spec: 'move %dir3 %n steps',
                defaults: [['forward'], 1]
            },
            turnTo: {
                only: SpriteMorph,
                type: 'command',
                category: 'motion',
                spec: 'turn %dir3 %n degrees',
                defaults: [['left'], 90]
            },
            rollTo: {
                only: SpriteMorph,
                type: 'command',
                category: 'motion',
                spec: 'roll %dir3 %n degrees',
                defaults: [['left'], 90]
            },
            translateTo: {
                only: SpriteMorph,
                type: 'command',
                category: 'motion',
                spec: 'move to x: %n y: %n z: %n',
                defaults: [0, 0, 0]
            },
            rotateTo: {
                only: SpriteMorph,
                type: 'command',
                category: 'motion',
                spec: 'rotate to x: %n y: %n z: %n',
                defaults: [0, 0, 0]
            },
            setTranslation: {
                only: SpriteMorph,
                type: 'command',
                category: 'motion',
                spec: 'set position x: %n y: %n z: %n',
                defaults: [0, 0, 0]
            },
            setRotation: {
                only: SpriteMorph,
                type: 'command',
                category: 'motion',
                spec: 'set rotation x: %n y: %n z: %n',
                defaults: [0, 0, 0]
            },
            reportTranslation: {
                only: SpriteMorph,
                type: 'reporter',
                category: 'motion',
                spec: 'position'
            },
            reportAxisTranslation: {
                only: SpriteMorph,
                type: 'reporter',
                category: 'motion',
                spec: '%axis position',
                defaults: [['x']]
            },
            reportRotation: {
                only: SpriteMorph,
                type: 'reporter',
                category: 'motion',
                spec: 'rotation'
            },
            reportAxisRotation: {
                only: SpriteMorph,
                type: 'reporter',
                category: 'motion',
                spec: '%axis rotation',
                defaults: [['x']]
            },
            scaleTo: {
                only: SpriteMorph,
                type: 'command',
                category: 'looks',
                spec: 'scale to x: %n y: %n z: %n',
                defaults: [1, 1, 1]
            },
            setScale: {
                only: SpriteMorph,
                type: 'command',
                category: 'looks',
                spec: 'set scale x: %n y: %n z: %n',
                defaults: [1, 1, 1]
            },
            reportScale: {
                only: SpriteMorph,
                type: 'reporter',
                category: 'looks',
                spec: 'scale'
            },
            reportAxisScale: {
                only: SpriteMorph,
                type: 'reporter',
                category: 'looks',
                spec: '%axis scale',
                defaults: [['x']]
            },
            createCardClone: {
                only: SpriteMorph,
                type: 'command',
                category: 'control',
                spec: 'create a clone',
            },
            removeCardClone: {
                only: SpriteMorph,
                type: 'command',
                category: 'control',
                spec: 'delete this clone',
            },
            reportProperty: {
                only: SpriteMorph,
                type: 'reporter',
                category: 'other',
                spec: 'property %prop',
                defaults: [['id']]
            },
        }
    );
};
SpriteMorph.prototype.initBlocks();

SpriteMorph.prototype.move = function (dir, dist) {
    const cmd = 'move';
    dir = Process.prototype.inputOption(dir);
    const args = [dir, dist];
    const options = [cmd, args];
    this.sendToWorld('doCommand', options);
};

SpriteMorph.prototype.turnTo = function (dir, deg) {
    const cmd = 'turn';
    dir = Process.prototype.inputOption(dir);
    const rad = deg * Math.PI / 180;
    const args = [dir, rad];
    const options = [cmd, args];
    this.sendToWorld('doCommand', options);
};

SpriteMorph.prototype.rollTo = function (dir, deg) {
    const cmd = 'roll';
    dir = Process.prototype.inputOption(dir);
    const rad = deg * Math.PI / 180;
    const args = [dir, rad];
    const options = [cmd, args];
    this.sendToWorld('doCommand', options);
};

SpriteMorph.prototype.translateTo = function (x, y, z) {
    const cmd = 'translateTo';
    const args = [x, y, z];
    const options = [cmd, args];
    this.sendToWorld('doCommand', options);
};

SpriteMorph.prototype.rotateTo = function (x, y, z) {
    const cmd = 'rotateTo';
    const args = [x, y, z];
    const options = [cmd, args];
    this.sendToWorld('doCommand', options);
};

SpriteMorph.prototype.setTranslation = function (x, y, z) {
    const cmd = 'setTranslation';
    const args = [x, y, z];
    const options = [cmd, args];
    this.sendToWorld('doCommand', options);
};

SpriteMorph.prototype.setRotation = function (x, y, z) {
    const cmd = 'setRotation';
    const args = [x, y, z];
    const options = [cmd, args];
    this.sendToWorld('doCommand', options);
};

SpriteMorph.prototype.reportTranslation = function () {
    return this.getCardProperty('translation');
};

SpriteMorph.prototype.reportAxisTranslation = function (axis) {
    const [x, y, z] = this.getCardProperty('translation').asArray();
    switch (Process.prototype.inputOption(axis)) {
        case 'x':
            return x;
        case 'y':
            return y;
        case 'z':
            return z;
    }
};

SpriteMorph.prototype.reportRotation = function () {
    return this.getCardProperty('rotation');
};

SpriteMorph.prototype.reportAxisRotation = function (axis) {
    const [x, y, z] = this.getCardProperty('rotation').asArray();
    switch (Process.prototype.inputOption(axis)) {
        case 'x':
            return x;
        case 'y':
            return y;
        case 'z':
            return z;
    }
};

SpriteMorph.prototype.scaleTo = function (x, y, z) {
    const cmd = 'scaleTo';
    const args = [x, y, z];
    const options = [cmd, args];
    this.sendToWorld('doCommand', options);
};

SpriteMorph.prototype.setScale = function (x, y, z) {
    const cmd = 'setScale';
    const args = [x, y, z];
    const options = [cmd, args];
    this.sendToWorld('doCommand', options);
};

SpriteMorph.prototype.reportScale = function () {
    return this.getCardProperty('scale');
};

SpriteMorph.prototype.reportAxisScale = function (axis) {
    const [x, y, z] = this.getCardProperty('translation').asArray();
    switch (Process.prototype.inputOption(axis)) {
        case 'x':
            return x;
        case 'y':
            return y;
        case 'z':
            return z;
    }
};

SpriteMorph.prototype.createCardClone = function () {
    const cmd = 'createCardClone';
    const args = new List([this.name]);
    const options = [cmd, args];
    this.sendToWorld('doCommand', options);
};

SpriteMorph.prototype.removeCardClone = function () {
    const cmd = 'removeCardClone';
    const args = new List([]);
    const options = [cmd, args];
    this.removeClone();
    this.sendToWorld('doCommand', options);
};

SpriteMorph.prototype.reportProperty = function (prop) {
    prop = Process.prototype.inputOption(prop);
    return this.getCardProperty(prop);
};

SpriteMorph.prototype.getCardProperty = function (prop) {
    const card = this.card;
    if (card) {
        console.log("card", card);
        console.log("cardData", card.collectCardData());
        const p = card[prop];
        if (p instanceof Array) {
            if (prop === 'rotation') {
                const x = p[0], y = p[1], z = p[2], w = p[3];
                return new List([
                    Math.atan2(2 * x * w - 2 * y * z, 1 - 2 * x * x - 2 * z * z),
                    Math.atan2(2 * y * w - 2 * x * z, 1 - 2 * y * y - 2 * z * z),
                    Math.asin(2 * x * y + 2 * z * w)
                ]);
            } else {
                return new List(p);
            }
        } else if (typeof p === 'string') {
            return p;
        } else {
            throw new Error('unsupported property');
        }
    }
    throw new Error('card does not exist');
};

SpriteMorph.prototype.sendToWorld = function (message, options) {
    const card = this.card;
    if (card) {
        const ide = this.parentThatIsA(IDE_Morph);
        const messageId = Math.floor(Math.random() * 1000000000);
        const payload = new List([card.id, messageId, 'wait', ...options])
        ide.broadcast(message, null, payload);
    } else {
        throw new Error('card does not exist');
    }
};

SpriteMorph.prototype.blockTemplates = function (
    category = 'motion',
    all = false // include hidden blocks
) {
    let varNames;
    const blocks = [], myself = this,
        inheritedVars = this.inheritedVariableNames(),
        wrld = this.world(),
        devMode = wrld && wrld.isDevMode;

    function block(selector, isGhosted) {
        if (StageMorph.prototype.hiddenPrimitives[selector] && !all) {
            return null;
        }
        const newBlock = SpriteMorph.prototype.blockForSelector(selector, true);
        newBlock.isTemplate = true;
        if (isGhosted) {
            newBlock.ghost();
        }
        return newBlock;
    }

    function variableBlock(varName, isLocal) {
        const newBlock = SpriteMorph.prototype.variableBlock(varName, isLocal);
        newBlock.isDraggable = false;
        newBlock.isTemplate = true;
        if (contains(inheritedVars, varName)) {
            newBlock.ghost();
        }
        return newBlock;
    }

    function watcherToggle(selector) {
        if (StageMorph.prototype.hiddenPrimitives[selector]) {
            return null;
        }
        const info = SpriteMorph.prototype.blocks[selector];
        return new ToggleMorph(
            'checkbox',
            this,
            function () {
                myself.toggleWatcher(
                    selector,
                    localize(info.spec),
                    myself.blockColor[info.category]
                );
            },
            null,
            function () {
                return myself.showingWatcher(selector);
            },
            null
        );
    }

    function variableWatcherToggle(varName, isGlobal) {
        return new ToggleMorph(
            'checkbox',
            this,
            function () {
                myself.toggleVariableWatcher(varName, isGlobal);
            },
            null,
            function () {
                return myself.showingVariableWatcher(varName, isGlobal);
            },
            null
        );
    }

    SnapExtensions.buttons.palette.forEach(buttonDescriptor => {
        if (buttonDescriptor.category === category) {
            blocks.push(this.customPaletteButton(buttonDescriptor));
        }
    });

    if (category === 'motion') {
        /*
        blocks.push(block('move'));
        blocks.push(block('turnTo'));
        blocks.push(block('rollTo'));
        blocks.push(block('translateTo'));
        blocks.push(block('rotateTo'));
        blocks.push(block('setTranslation'));
        blocks.push(block('setRotation'));
        blocks.push(block('reportTranslation'));
        blocks.push(block('reportAxisTranslation'));
        blocks.push(block('reportRotation'));
        blocks.push(block('reportAxisRotation'));
        */

    } else if (category === 'looks') {
        /*
        blocks.push(block('scaleTo'));
        blocks.push(block('setScale'));
        blocks.push(block('reportScale'));
        blocks.push(block('reportAxisScale'));
        */

    } else if (category === 'control') {

        blocks.push(block('receiveGo'));
        blocks.push(block('receiveKey'));
        blocks.push(block('receiveInteraction'));
        blocks.push(block('receiveCondition'));
        blocks.push('-');
        blocks.push(block('receiveMessage'));
        blocks.push(block('doBroadcast'));
        blocks.push(block('doBroadcastAndWait'));
        blocks.push('-');
        blocks.push(block('doWarp'));
        blocks.push('-');
        blocks.push(block('doWait'));
        blocks.push(block('doWaitUntil'));
        blocks.push('-');
        blocks.push(block('doForever'));
        blocks.push(block('doRepeat'));
        blocks.push(block('doUntil'));
        blocks.push(block('doFor'));
        blocks.push('-');
        blocks.push(block('doIf'));
        blocks.push(block('doIfElse'));
        blocks.push(block('reportIfElse'));
        blocks.push('-');
        blocks.push(block('doReport'));
        blocks.push(block('doStopThis'));
        blocks.push('-');
        blocks.push(block('doRun'));
        blocks.push(block('fork'));
        blocks.push(block('evaluate'));
        blocks.push(block('reportPipe'));
        blocks.push('-');
        blocks.push(block('doTellTo'));
        blocks.push(block('reportAskFor'));
        blocks.push('-');
        blocks.push(block('doCallCC'));
        blocks.push(block('reportCallCC'));
        blocks.push('-');
        blocks.push(block('receiveOnClone'));
        blocks.push(block('createCardClone'));
        blocks.push(block('removeCardClone'));
        blocks.push('-');
        blocks.push(block('doPauseAll'));
        blocks.push(block('doSwitchToScene'));
        blocks.push('-');
        blocks.push(block('receiveUserEdit'));
        blocks.push(block('doDefineBlock'));
        blocks.push(block('doDeleteBlock'));
        blocks.push(block('doSetBlockAttribute'));
        blocks.push(block('reportBlockAttribute'));
        blocks.push(block('reportThisContext'));

        // for debugging: ///////////////
        if (devMode) {
            blocks.push('-');
            blocks.push(this.devModeText());
            blocks.push('-');
            blocks.push(watcherToggle('getLastMessage'));
            blocks.push(block('getLastMessage'));
        }

    } else if (category === 'sensing') {

        blocks.push(block('reportTouchingObject'));
        blocks.push(block('reportTouchingColor'));
        blocks.push(block('reportColorIsTouchingColor'));
        blocks.push('-');
        blocks.push(block('doAsk'));
        blocks.push(watcherToggle('getLastAnswer'));
        blocks.push(block('getLastAnswer'));
        blocks.push('-');
        blocks.push(block('reportMousePosition'));
        blocks.push(watcherToggle('reportMouseX'));
        blocks.push(block('reportMouseX'));
        blocks.push(watcherToggle('reportMouseY'));
        blocks.push(block('reportMouseY'));
        blocks.push(block('reportMouseDown'));
        blocks.push('-');
        blocks.push(block('reportKeyPressed'));
        blocks.push('-');
        blocks.push(block('reportRelationTo'));
        blocks.push(block('reportAspect'));
        blocks.push('-');
        blocks.push(block('doResetTimer'));
        blocks.push(watcherToggle('getTimer'));
        blocks.push(block('getTimer'));
        blocks.push(block('reportDate'));
        blocks.push('-');
        blocks.push(block('reportAttributeOf'));

        if (SpriteMorph.prototype.enableFirstClass) {
            blocks.push(block('reportGet'));
        }

        blocks.push(block('reportObject'));
        blocks.push('-');
        blocks.push(block('reportURL'));
        blocks.push(block('reportAudio'));
        blocks.push(block('reportVideo'));
        blocks.push(block('doSetVideoTransparency'));
        blocks.push('-');
        blocks.push(block('reportGlobalFlag'));
        blocks.push(block('doSetGlobalFlag'));

        // for debugging: ///////////////
        if (devMode) {
            blocks.push('-');
            blocks.push(this.devModeText());
            blocks.push('-');
            blocks.push(watcherToggle('reportThreadCount'));
            blocks.push(block('reportThreadCount'));
            blocks.push(block('reportStackSize'));
            blocks.push(block('reportFrameCount'));
            blocks.push(block('reportYieldCount'));
        }
    } else if (category === 'operators') {

        blocks.push(block('reifyScript'));
        blocks.push(block('reifyReporter'));
        blocks.push(block('reifyPredicate'));
        blocks.push('#');
        blocks.push('-');
        blocks.push(block('reportVariadicSum'));
        blocks.push(block('reportDifference'));
        blocks.push(block('reportVariadicProduct'));
        blocks.push(block('reportQuotient'));
        blocks.push(block('reportPower'));
        blocks.push('-');
        blocks.push(block('reportModulus'));
        blocks.push(block('reportRound'));
        blocks.push(block('reportMonadic'));
        blocks.push(block('reportRandom'));
        blocks.push('-');
        blocks.push(block('reportLessThan'));
        blocks.push(block('reportEquals'));
        blocks.push(block('reportGreaterThan'));
        blocks.push('-');
        blocks.push(block('reportAnd'));
        blocks.push(block('reportOr'));
        blocks.push(block('reportNot'));
        blocks.push(block('reportBoolean'));
        blocks.push('-');
        blocks.push(block('reportJoinWords'));
        blocks.push(block('reportTextSplit'));
        blocks.push(block('reportLetter'));
        blocks.push(block('reportStringSize'));
        blocks.push('-');
        blocks.push(block('reportUnicode'));
        blocks.push(block('reportUnicodeAsLetter'));
        blocks.push('-');
        blocks.push(block('reportIsA'));
        blocks.push(block('reportIsIdentical'));

        if (Process.prototype.enableJS) {
            blocks.push('-');
            blocks.push(block('reportJSFunction'));
            if (Process.prototype.enableCompiling) {
                blocks.push(block('reportCompiled'));
            }
        }
        // for debugging: ///////////////
        if (devMode) {
            blocks.push('-');
            blocks.push(this.devModeText());
            blocks.push('-');
            blocks.push(block('reportTypeOf'));
            blocks.push(block('reportTextFunction'));
        }

    } else if (category === 'variables') {

        blocks.push(this.makeVariableButton());
        if (this.deletableVariableNames().length > 0) {
            blocks.push(this.deleteVariableButton());
        }
        blocks.push('-');

        varNames = this.allGlobalVariableNames(true, all);
        if (varNames.length > 0) {
            varNames.forEach(name => {
                blocks.push(variableWatcherToggle(name, true));
                blocks.push(variableBlock(name));
            });
            blocks.push('-');
        }

        varNames = this.allLocalVariableNames(true, all);
        if (varNames.length > 0) {
            varNames.forEach(name => {
                blocks.push(variableWatcherToggle(name));
                blocks.push(variableBlock(name, true));
            });
            blocks.push('-');
        }

        blocks.push(block('doSetVar'));
        blocks.push(block('doChangeVar'));
        blocks.push(block('doShowVar'));
        blocks.push(block('doHideVar'));
        blocks.push(block('doDeclareVariables'));

        // inheritance:

        if (StageMorph.prototype.enableInheritance) {
            blocks.push('-');
            blocks.push(block('doDeleteAttr'));
        }

        blocks.push('=');
        blocks.push(block('reportNewList'));
        blocks.push(block('reportNumbers'));
        blocks.push('-');
        blocks.push(block('reportCONS'));
        blocks.push(block('reportListItem'));
        blocks.push(block('reportCDR'));
        blocks.push('-');
        blocks.push(block('reportListAttribute'));
        blocks.push(block('reportListIndex'));
        blocks.push(block('reportListContainsItem'));
        blocks.push(block('reportListIsEmpty'));
        blocks.push('-');
        blocks.push(block('reportMap'));
        blocks.push(block('reportKeep'));
        blocks.push(block('reportFindFirst'));
        blocks.push(block('reportCombine'));
        blocks.push('-');
        blocks.push(block('doForEach'));
        blocks.push('-');
        blocks.push(block('doAddToList'));
        blocks.push(block('doDeleteFromList'));
        blocks.push(block('doInsertInList'));
        blocks.push(block('doReplaceInList'));
        blocks.push('-');
        blocks.push(block('reportConcatenatedLists'));
        blocks.push(block('reportReshape'));
        blocks.push(block('reportCrossproduct'));
        blocks.push('=');
        blocks.push(block('reportProperty'));

        if (SpriteMorph.prototype.showingExtensions) {
            blocks.push('=');
            blocks.push(block('doApplyExtension'));
            blocks.push(block('reportApplyExtension'));
        }

        if (StageMorph.prototype.enableCodeMapping) {
            blocks.push('=');
            blocks.push(block('doMapCodeOrHeader'));
            blocks.push(block('doMapValueCode'));
            blocks.push(block('doMapListCode'));
            blocks.push('-');
            blocks.push(block('reportMappedCode'));
        }

        // for debugging: ///////////////
        if (this.world().isDevMode) {
            blocks.push('-');
            blocks.push(this.devModeText());
            blocks.push('-');
            blocks.push(block('doShowTable'));
        }
    }

    return blocks;
};

StageMorph.prototype.blockTemplates = function (
    category = 'motion',
    all = false // include hidden blocks
) {
    let varNames, txt;
    const blocks = [], myself = this;

    function block(selector) {
        if (myself.hiddenPrimitives[selector] && !all) {
            return null;
        }
        const newBlock = SpriteMorph.prototype.blockForSelector(selector, true);
        newBlock.isTemplate = true;
        return newBlock;
    }

    function variableBlock(varName, isLocal) {
        const newBlock = SpriteMorph.prototype.variableBlock(varName, isLocal);
        newBlock.isDraggable = false;
        newBlock.isTemplate = true;
        return newBlock;
    }


    function watcherToggle(selector) {
        if (myself.hiddenPrimitives[selector]) {
            return null;
        }
        const info = SpriteMorph.prototype.blocks[selector];
        return new ToggleMorph(
            'checkbox',
            this,
            function () {
                myself.toggleWatcher(
                    selector,
                    localize(info.spec),
                    myself.blockColor[info.category]
                );
            },
            null,
            function () {
                return myself.showingWatcher(selector);
            },
            null
        );
    }

    function variableWatcherToggle(varName, isGlobal) {
        return new ToggleMorph(
            'checkbox',
            this,
            function () {
                myself.toggleVariableWatcher(varName, isGlobal);
            },
            null,
            function () {
                return myself.showingVariableWatcher(varName, isGlobal);
            },
            null
        );
    }


    SnapExtensions.buttons.palette.forEach(buttonDescriptor => {
        if (buttonDescriptor.category === category) {
            blocks.push(this.customPaletteButton(buttonDescriptor));
        }
    });

    if (category === 'motion') {

        txt = new TextMorph(localize('Stage selected:\nno motion primitives'));
        txt.fontSize = 9;
        txt.setColor(this.paletteTextColor);
        txt.hideWithCategory = true; // hide txt when category names are hidden
        blocks.push(txt);

    } else if (category === 'looks') {

        txt = new TextMorph(localize('Stage selected:\nno looks primitives'));
        txt.fontSize = 9;
        txt.setColor(this.paletteTextColor);
        txt.hideWithCategory = true; // hide txt when category names are hidden
        blocks.push(txt);

    } else if (category === 'control') {

        blocks.push(block('receiveGo'));
        blocks.push(block('receiveKey'));
        blocks.push(block('receiveInteraction'));
        blocks.push(block('receiveCondition'));
        blocks.push('-');
        blocks.push(block('receiveMessage'));
        blocks.push(block('doBroadcast'));
        blocks.push(block('doBroadcastAndWait'));
        blocks.push('-');
        blocks.push(block('doWarp'));
        blocks.push('-');
        blocks.push(block('doWait'));
        blocks.push(block('doWaitUntil'));
        blocks.push('-');
        blocks.push(block('doForever'));
        blocks.push(block('doRepeat'));
        blocks.push(block('doUntil'));
        blocks.push(block('doFor'));
        blocks.push('-');
        blocks.push(block('doIf'));
        blocks.push(block('doIfElse'));
        blocks.push(block('reportIfElse'));
        blocks.push('-');
        blocks.push(block('doReport'));
        blocks.push(block('doStopThis'));
        blocks.push('-');
        blocks.push(block('doRun'));
        blocks.push(block('fork'));
        blocks.push(block('evaluate'));
        blocks.push(block('reportPipe'));
        blocks.push('-');
        blocks.push(block('doTellTo'));
        blocks.push(block('reportAskFor'));
        blocks.push('-');
        blocks.push(block('doCallCC'));
        blocks.push(block('reportCallCC'));
        blocks.push('-');
        blocks.push(block('createClone'));
        blocks.push(block('newClone'));
        blocks.push('-');
        blocks.push(block('doPauseAll'));
        blocks.push(block('doSwitchToScene'));
        blocks.push('-');
        blocks.push(block('receiveUserEdit'));
        blocks.push(block('doDefineBlock'));
        blocks.push(block('doDeleteBlock'));
        blocks.push(block('doSetBlockAttribute'));
        blocks.push(block('reportBlockAttribute'));
        blocks.push(block('reportThisContext'));

        // for debugging: ///////////////
        if (this.world().isDevMode) {
            blocks.push('-');
            blocks.push(this.devModeText());
            blocks.push('-');
            blocks.push(watcherToggle('getLastMessage'));
            blocks.push(block('getLastMessage'));
        }

    } else if (category === 'sensing') {

        blocks.push(block('doAsk'));
        blocks.push(watcherToggle('getLastAnswer'));
        blocks.push(block('getLastAnswer'));
        blocks.push('-');
        blocks.push(block('reportMousePosition'));
        blocks.push(watcherToggle('reportMouseX'));
        blocks.push(block('reportMouseX'));
        blocks.push(watcherToggle('reportMouseY'));
        blocks.push(block('reportMouseY'));
        blocks.push(block('reportMouseDown'));
        blocks.push('-');
        blocks.push(block('reportKeyPressed'));
        blocks.push('-');
        blocks.push(block('reportAspect'));
        blocks.push('-');
        blocks.push(block('doResetTimer'));
        blocks.push(watcherToggle('getTimer'));
        blocks.push(block('getTimer'));
        blocks.push(block('reportDate'));
        blocks.push('-');
        blocks.push(block('reportAttributeOf'));

        if (SpriteMorph.prototype.enableFirstClass) {
            blocks.push(block('reportGet'));
        }

        blocks.push(block('reportObject'));
        blocks.push('-');
        blocks.push(block('reportURL'));
        blocks.push(block('reportAudio'));
        blocks.push(block('reportVideo'));
        blocks.push(block('doSetVideoTransparency'));
        blocks.push('-');
        blocks.push(block('reportGlobalFlag'));
        blocks.push(block('doSetGlobalFlag'));

        // for debugging: ///////////////
        if (this.world().isDevMode) {
            blocks.push('-');
            blocks.push(this.devModeText());
            blocks.push('-');
            blocks.push(watcherToggle('reportThreadCount'));
            blocks.push(block('reportThreadCount'));
            blocks.push(block('reportStackSize'));
            blocks.push(block('reportFrameCount'));
            blocks.push(block('reportYieldCount'));
        }
    }
    if (category === 'operators') {

        blocks.push(block('reifyScript'));
        blocks.push(block('reifyReporter'));
        blocks.push(block('reifyPredicate'));
        blocks.push('#');
        blocks.push('-');
        blocks.push(block('reportVariadicSum'));
        blocks.push(block('reportDifference'));
        blocks.push(block('reportVariadicProduct'));
        blocks.push(block('reportQuotient'));
        blocks.push(block('reportPower'));
        blocks.push('-');
        blocks.push(block('reportModulus'));
        blocks.push(block('reportRound'));
        blocks.push(block('reportMonadic'));
        blocks.push(block('reportRandom'));
        blocks.push('-');
        blocks.push(block('reportLessThan'));
        blocks.push(block('reportEquals'));
        blocks.push(block('reportGreaterThan'));
        blocks.push('-');
        blocks.push(block('reportAnd'));
        blocks.push(block('reportOr'));
        blocks.push(block('reportNot'));
        blocks.push(block('reportBoolean'));
        blocks.push('-');
        blocks.push(block('reportJoinWords'));
        blocks.push(block('reportTextSplit'));
        blocks.push(block('reportLetter'));
        blocks.push(block('reportStringSize'));
        blocks.push('-');
        blocks.push(block('reportUnicode'));
        blocks.push(block('reportUnicodeAsLetter'));
        blocks.push('-');
        blocks.push(block('reportIsA'));
        blocks.push(block('reportIsIdentical'));

        if (Process.prototype.enableJS) { // (Process.prototype.enableJS) {
            blocks.push('-');
            blocks.push(block('reportJSFunction'));
            if (Process.prototype.enableCompiling) {
                blocks.push(block('reportCompiled'));
            }
        }

        // for debugging: ///////////////
        if (this.world().isDevMode) {
            blocks.push('-');
            blocks.push(this.devModeText());
            blocks.push('-');
            blocks.push(block('reportTypeOf'));
            blocks.push(block('reportTextFunction'));
        }

    }
    if (category === 'variables') {

        blocks.push(this.makeVariableButton());
        if (this.variables.allNames().length > 0) {
            blocks.push(this.deleteVariableButton());
        }
        blocks.push('-');

        varNames = this.allGlobalVariableNames(true, all);
        if (varNames.length > 0) {
            varNames.forEach(name => {
                blocks.push(variableWatcherToggle(name, true));
                blocks.push(variableBlock(name));
            });
            blocks.push('-');
        }

        varNames = this.allLocalVariableNames(true, all);
        if (varNames.length > 0) {
            varNames.forEach(name => {
                blocks.push(variableWatcherToggle(name));
                blocks.push(variableBlock(name, true));
            });
            blocks.push('-');
        }

        blocks.push(block('doSetVar'));
        blocks.push(block('doChangeVar'));
        blocks.push(block('doShowVar'));
        blocks.push(block('doHideVar'));
        blocks.push(block('doDeclareVariables'));
        blocks.push('=');
        blocks.push(block('reportNewList'));
        blocks.push(block('reportNumbers'));
        blocks.push('-');
        blocks.push(block('reportCONS'));
        blocks.push(block('reportListItem'));
        blocks.push(block('reportCDR'));
        blocks.push('-');
        blocks.push(block('reportListAttribute'));
        blocks.push(block('reportListIndex'));
        blocks.push(block('reportListContainsItem'));
        blocks.push(block('reportListIsEmpty'));
        blocks.push('-');
        blocks.push(block('reportMap'));
        blocks.push(block('reportKeep'));
        blocks.push(block('reportFindFirst'));
        blocks.push(block('reportCombine'));
        blocks.push('-');
        blocks.push(block('doForEach'));
        blocks.push('-');
        blocks.push(block('doAddToList'));
        blocks.push(block('doDeleteFromList'));
        blocks.push(block('doInsertInList'));
        blocks.push(block('doReplaceInList'));
        blocks.push('-');
        blocks.push(block('reportConcatenatedLists'));
        blocks.push(block('reportReshape'));
        blocks.push(block('reportCrossproduct'));

        if (SpriteMorph.prototype.showingExtensions) {
            blocks.push('=');
            blocks.push(block('doApplyExtension'));
            blocks.push(block('reportApplyExtension'));
        }

        if (StageMorph.prototype.enableCodeMapping) {
            blocks.push('=');
            blocks.push(block('doMapCodeOrHeader'));
            blocks.push(block('doMapValueCode'));
            blocks.push(block('doMapListCode'));
            blocks.push('-');
            blocks.push(block('reportMappedCode'));
        }

        // for debugging: ///////////////
        if (this.world().isDevMode) {
            blocks.push('-');
            blocks.push(this.devModeText());
            blocks.push('-');
            blocks.push(block('doShowTable'));
        }
    }

    return blocks;
};