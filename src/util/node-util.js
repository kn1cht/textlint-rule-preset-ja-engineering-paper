// Copyright (c) 2015 azu
// LICENSE : MIT
// https://github.com/textlint-ja/textlint-rule-preset-JTF-style/blob/master/LICENSE
"use strict";
import { RuleHelper } from "textlint-rule-helper";
/**
 * ユーザーが書いたと推測されるNodeかどうかを判定する
 * ユーザーが管理できないテキストは対象外としたいため。
 * @param node
 * @param context
 * @returns {boolean}
 */
export function isUserWrittenNode(node, context) {
    let helper = new RuleHelper(context);
    let Syntax = context.Syntax;
    return !helper.isChildNode(node, [Syntax.Link, Syntax.Image, Syntax.BlockQuote, Syntax.Emphasis]);
}
