// SPDX-FileCopyrightText: Copyright (C) 2023-2024 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)<lichtblick@bmwgroup.com>
// SPDX-License-Identifier: MPL-2.0

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with thiswd
// file, You can obtain one at http://mozilla.org/MPL/2.0/

describe('My First Test', () => {
  // eslint-disable-next-line jest/expect-expect
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type')
    cy.url().should('include', '/commands/actions')
  })
})
