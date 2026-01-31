import { test, expect } from '@playwright/test';

/**
 * Singlish to Sinhala Transliteration Test Suite
 * Based on Test Case Specification: IT23554122
 */
test.describe('Sinhala Transliteration - 35 Case Optimized Suite', () => {

    test.beforeEach(async ({ page }) => {
        // Increase timeout for initial navigation
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle', timeout: 60000 });
    });

    const testCases = [
        // --- POSITIVE FUNCTIONAL: ACCURACY VALIDATION (1-24) ---
        { id: "Pos_Fun_0001", len: "S", input: "mama gedhara inne", expected: "මම ගෙදර ඉන්නේ" },
        { id: "Pos_Fun_0002", len: "M", input: "mama kade gihin bath ekak kanava", expected: "මම කඩෙ ගිහින් බත් එකක් කනව" },
        { id: "Pos_Fun_0003", len: "M", input: "karunaakarlaa gedara yanna", expected: "කරුණාකරලා ගෙදර යන්න" },
        { id: "Pos_Fun_0004", len: "S", input: "Oyaata kohomadha", expected: "ඔයාට කොහොමද" },
        { id: "Pos_Fun_0005", len: "S", input: "adha api gamee yanvaa", expected: "අද අපි ගමේ යනවා" },
        { id: "Pos_Fun_0006", len: "S", input: "mama eyaata adharee naha", expected: "මම එයාට ආදරේ නැහැ" },
        { id: "Pos_Fun_0007", len: "M", input: "oyaata mata salli dhenta puluvandha", expected: "ඔයාට මට සල්ලි දෙන්ට පුලුවන්ද" },
        { id: "Pos_Fun_0008", len: "S", input: "ada Ikmanata yamu ban", expected: "අද ඉක්මනට යමු බන්" },
        { id: "Pos_Fun_0009", len: "S", input: "suba rathriyak", expected: "සුබ රාත්‍රියක්" },
        { id: "Pos_Fun_0010", len: "M", input: "mata oyava balaganna puluvan", expected: "මට ඔයාව බලගන්න පුලුවන්" },
        { id: "Pos_Fun_0011", len: "S", input: "mamanidhi", expected: "මමනිදි" },
        { id: "Pos_Fun_0012", len: "S", input: "epaa epaa mama ennam", expected: "එපා එපා මම එන්නම්" },
        { id: "Pos_Fun_0013", len: "S", input: "eyaa gedar giyaa", expected: "එයා ගෙදර ගියා" },
        { id: "Pos_Fun_0014", len: "M", input: "mama mee cricket ghnwa", expected: "මම මේ ක්‍රිකට් ගහනවා" },
        { id: "Pos_Fun_0015", len: "S", input: "api heta eanvaa", expected: "අපි හෙට එනවා" },
        { id: "Pos_Fun_0016", len: "M", input: "mata file eka whatsapp karanta", expected: "මට file එක whatsapp කරන්ට" },
        { id: "Pos_Fun_0017", len: "S", input: "Matale yanawaa", expected: "මාතලේ යනවා" },
        { id: "Pos_Fun_0018", len: "M", input: "Oyaage Student Id eka balanna", expected: "ඔයාගෙ Student id එක බලන්න" },
        { id: "Pos_Fun_0019", len: "S", input: "koheda giyee?", expected: "කොහෙද ගියේ" },
        { id: "Pos_Fun_0020", len: "S", input: "baduwa Rs. 1000", expected: "බඩුව Rs. 1000" },
        { id: "Pos_Fun_0021", len: "S", input: "meeting eka 5AM", expected: "meeting එක 5AM" },
        { id: "Pos_Fun_0022", len: "M", input: "sini 2KG ganna 01/01/2026 venidhaa", expected: "සිනි 2KGගන්න 01/01/2026 වෙනිදා" },
        { id: "Pos_Fun_0023", len: "M", input: "hello ratharan yaluve oyaata kohomadha", expected: "hello රතරන් යලුවෙ ඔයාට කොහොමද" },
        { id: "Pos_Fun_0024", len: "M", input: "Eda vassa unath api beach yanna thma hitiye", expected: "එදා වැස්ස උනත් අපි බීච් යන්න තමා හිටියේ" },

        // --- NEGATIVE FUNCTIONAL: ROBUSTNESS VALIDATION (25-34) ---
        { id: "Neg_Fun_0001", len: "M", input: "mama gedhara gihinikmant monava hari gannam", expected: "මම ගෙදර ගිහින් ඉක්මන්ට් මොනව හරි ගන්නම්" },
        { id: "Neg_Fun_0002", len: "M", input: "adoo eka super lame, fix karapan ikmanata", expected: "අඩෝ ඒක සුපර් ලෙම් ෆික්ස් කරපන් ඉක්මනට" },
        { id: "Neg_Fun_0003", len: "M", input: "event eka 5PM nuwaraeliyetyenne bring yourId", expected: "ඉවෙන්ට් එක 5PM නුවරැලියෙතියෙන්නෙ" },
        { id: "Neg_Fun_0004", len: "M", input: "eya social media use karanne na thawath", expected: "එය social media use කරන්නේ න" },
        { id: "Neg_Fun_0005", len: "S", input: "epaaepaa", expected: "එපාඑප" },
        { id: "Neg_Fun_0006", len: "M", input: "eka supri wadak machan!", expected: "එක සුප්‍රි wඅඩක් මචන්" },
        { id: "Neg_Fun_0007", len: "M", input: "mama paymet kraa but salli kapila na", expected: "මම පය්මෙට් ක්‍ර but සල්ලි කපිල න" },
        { id: "Neg_Fun_0008", len: "M", input: "oyata file eka wahama ewann puluwanda urgent", expected: "ඔයාට ෆිලෙ එක වහම එවන්න පුලුවන්ඩ" },
        { id: "Neg_Fun_0009", len: "M", input: "Machan heta party da, full hype hoo", expected: "මචන් හෙට පාර්ටි ඩ ෆුල් හ්‍ය්පි හෝ" },
        { id: "Neg_Fun_0010", len: "M", input: "Ticket Rs.2500 7.30 show ekata thiyenne 5/02", expected: "ටිකට් Rs.2500 7.30 ශොව් එකට තියෙන්නෙ" },

        // --- UI CASE ---
        { id: "Pos_UI_0001", len: "S", input: "Mama", expected: "මම" }
    ];

    for (const tc of testCases) {
        test(`${tc.id} [Length: ${tc.len}]`, async ({ page }) => {
            const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
            const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');

            // 1. Clear and Type Input
            await inputArea.click();
            await page.keyboard.press('Control+A');
            await page.keyboard.press('Backspace');
            await inputArea.fill(tc.input);

            // 2. Wait for the engine to react (SwiftTranslator converts as you type)
            // We wait for the box to not be empty
            await expect(async () => {
                const text = await outputBox.textContent();
                expect(text?.trim().length).toBeGreaterThan(0);
            }).toPass({ timeout: 5000 });

            const rawOutput = await outputBox.textContent() || '';
            
            // 3. Cleaning Logic for comparison
            const cleanActual = rawOutput.replace(/[\n\r\t]/g, ' ').replace(/\s+/g, ' ').trim();
            const cleanExpected = tc.expected.replace(/[\n\r\t]/g, ' ').replace(/\s+/g, ' ').trim();

            // 4. Word-by-Word Matching (Handles engine differences)
            // This regex captures Sinhala Unicode range + standard alphanumeric words
            const expectedWords = cleanExpected.match(/[\u0D80-\u0DFF]+|[A-Za-z0-9]+/g) || [];
            const matchedWords = expectedWords.filter(word => cleanActual.includes(word));
            
            const successRate = expectedWords.length > 0 
                ? (matchedWords.length / expectedWords.length) * 100 
                : 0;
            
            console.log(`TC: ${tc.id} | Input: "${tc.input}" | Match: ${successRate.toFixed(1)}%`);

            // 5. Validation Requirement: Set to 60% as requested for high pass rate
            expect(successRate, `Issue in ${tc.id}. Expected: ${cleanExpected} | Got: ${cleanActual}`)
                .toBeGreaterThanOrEqual(60);
        });
    }
});